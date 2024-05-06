import { BrowserProvider } from "ethers";
import { SiweMessage } from "siwe";

import { VERIFY } from "types/wallet";

export async function signInWithEthereumLocal(
  address: string,
  chainId: number,
  nonce: string,
  provider: BrowserProvider
): Promise<VERIFY> {
  const message = new SiweMessage({
    domain: window.location.host,
    address,
    statement: "Sign in with Ethereum to the app.",
    uri: window.location.origin,
    version: "1",
    chainId,
    nonce,
  }).toMessage();

  const signer = await provider.getSigner();
  const signature = await signer.signMessage(message);

  return {
    message,
    signature,
    address,
  };
}
