import { getWalletClient } from "@wagmi/core";

import { ethers, BrowserProvider } from "ethers";

import UniversalProvider from "@walletconnect/universal-provider";
import config, { metadata, projectId } from "./config";

import { ABI, ADDRESS } from "common/data/mint";

import { store } from "store";

export async function getBrowserProvider() {
  const client = await getWalletClient(config);

  const { chain, transport } = client;
  const network = {
    chainId: chain?.id,
    name: chain?.name,
    ensAddress: chain?.contracts?.ensRegistry?.address,
  };

  const provider = new BrowserProvider(transport, network);

  return provider;
}

export async function getUniversalProvider() {
  const provider = await UniversalProvider.init({
    projectId,
    metadata,
  });

  return provider;
}

export async function getClient() {
  const client = await getWalletClient(config);
  return client;
}

export async function getSigner() {
  const [provider, client] = await Promise.all([
    getBrowserProvider(),
    getClient(),
  ]);
  const { account } = client;
  const signer = await provider.getSigner(account?.address);

  return signer;
}

export async function getContract(): Promise<ethers.Contract | null> {
  const { logged } = store.getState().user.data;
  if (!logged) {
    return null;
  }

  return new ethers.Contract(ADDRESS, ABI, await getSigner());
}
