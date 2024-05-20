
import { store } from "store";
import config from "./config";
import {  getWalletClient } from "@wagmi/core";

import { BrowserProvider } from "ethers";
import { setProvider, setClient, setSigner } from "slices/wallet/slice";

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