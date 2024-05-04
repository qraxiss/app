import { useWeb3Modal } from "@web3modal/wagmi/react";
import { Button } from "react-bootstrap";

import { signInWithEthereumLocal } from "wallet/siwe";
import { BrowserProvider } from "ethers";

import { useAccount } from "wagmi";
import { fetchNonceAsync, verifySignatureAsync } from "slices/wallet/thunk";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { AppDispatch } from "store";

export default function ConnectButton() {
  const { open } = useWeb3Modal();
  const provider = new BrowserProvider(window.ethereum);
  const { address, chainId, status } = useAccount();
  const { nonce, jwt } = useSelector((state: any) => state.wallet.data);

  if (jwt) {
    localStorage.setItem("jwt", jwt);
  }

  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchNonceAsync());
  }, [dispatch]);

  return (
    <>
      <Button
        variant="primary"
        onClick={() => {
          open();
        }}
      >
        Open Connect Modal
      </Button>
      <Button
        variant="secondary"
        onClick={() => {
          if (address)
            signInWithEthereumLocal(address, chainId!, nonce, provider).then(
              (data) => {
                dispatch(verifySignatureAsync(data));
              }
            );
        }}
      >
        Sign In With Ethereum
      </Button>
    </>
  );
}
