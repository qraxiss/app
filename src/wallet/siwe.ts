import { SiweMessage, generateNonce } from "siwe";
import {
  createSIWEConfig,
  SIWESession,
  SIWECreateMessageArgs,
  SIWEVerifyMessageArgs,
} from "@web3modal/siwe";

import { store } from "store";
import config from "./config";
import { getAccount, getWalletClient } from "@wagmi/core";
import { verifySignatureAsync, disconnectWalletAsync } from "slices/thunk";
import chains from "./chains";

import { WalletClient } from "viem";
import { BrowserProvider } from "ethers";
import { setProvider, setClient, setSigner } from "slices/wallet/slice";

function createMessage({ nonce, address, chainId }: SIWECreateMessageArgs) {
  const message = new SiweMessage({
    version: "1",
    domain: window.location.host,
    uri: window.location.origin,
    address,
    chainId,
    nonce,
    statement: "Sign in With Ethereum.",
  });

  return message.prepareMessage();
}

async function validateMessage({
  message,
  signature,
}: {
  message: string;
  signature: string;
}): Promise<boolean> {
  await store.dispatch(verifySignatureAsync({ message, signature }));
  return store.getState().user.data.logged;
}

async function getNonce(address?: any) {
  // await store.dispatch(fetchNonceAsync());
  // return store.getState().wallet.data.nonce;

  return generateNonce();
}

async function getSession(): Promise<SIWESession> {
  const { address, chainId } = getAccount(config);

  return {
    address,
    chainId,
  } as SIWESession;
}

/* Use your SIWE server to verify if the message and the signature are valid */
async function verifyMessage({ message, signature }: SIWEVerifyMessageArgs) {
  try {
    const isValid = await validateMessage({ message, signature });

    return isValid;
  } catch (error) {
    return false;
  }
}

async function signOut() {
  await store.dispatch(disconnectWalletAsync());

  return store.getState().user.data.logged;
}

async function getMessageParams() {
  return {
    nonce: await getNonce(),
    ...(await getSession()),
    chains: chains.map((chain) => chain.id),
    version: "1",
    domain: window.location.host,
    uri: window.location.origin,
  };
}

/* Create a SIWE configuration object */
export const siweConfig = createSIWEConfig({
  createMessage,
  getNonce,
  getSession,
  verifyMessage,
  signOut,
  getMessageParams,
});

export async function getProvider() {
  let provider = store.getState().wallet.provider;

  if (provider) {
    return provider;
  }

  const client = await getWalletClient(config);

  const { chain, transport } = client;
  const network = {
    chainId: chain?.id,
    name: chain?.name,
    ensAddress: chain?.contracts?.ensRegistry?.address,
  };

  provider = new BrowserProvider(transport, network);

  store.dispatch(setProvider(provider));

  return provider;
}

export async function getClient() {
  let client = store.getState().wallet.client;

  if (client) {
    return client;
  }

  client = await getWalletClient(config);
  store.dispatch(setClient(client));

  return client;
}

export async function getSigner() {
  let signer = store.getState().wallet.signer;

  if (signer) {
    return signer;
  }

  const [provider, client] = await Promise.all([getProvider(), getClient()]);

  const { account } = client;

  signer = await provider.getSigner(account?.address);

  store.dispatch(setSigner(signer));

  return signer;
}

export async function connectWallet() {
  const signer = await getSigner();

  const address = await signer.getAddress();
  const { chainId } = getAccount(config);
  const nonce = await siweConfig.getNonce();

  const message = siweConfig.createMessage({
    nonce,
    address,
    chainId,
  } as any);

  const signature = await signer.signMessage(message);

  return await siweConfig.verifyMessage({ message, signature });
}
