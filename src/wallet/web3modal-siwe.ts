import { SiweMessage } from "siwe";
import {
  createSIWEConfig,
  SIWESession,
  SIWECreateMessageArgs,
  SIWEVerifyMessageArgs,
} from "@web3modal/siwe";

import { store } from "store";
import config from "./config";
import { getAccount } from "@wagmi/core";
import {
  verifySignatureAsync,
  fetchNonceAsync,
  disconnectWalletAsync,
} from "slices/thunk";
import chains from "./chains";

/* Function that creates a SIWE message */
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
  await store.dispatch(fetchNonceAsync());
  return store.getState().wallet.data.nonce;
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
