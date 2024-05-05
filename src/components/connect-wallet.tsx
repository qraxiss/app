import { useWeb3Modal } from "@web3modal/wagmi/react";
import { Button, Image } from "react-bootstrap";

import { signInWithEthereumLocal } from "wallet/siwe";
import { BrowserProvider } from "ethers";

import { useAccount } from "wagmi";
import { verifySignatureAsync } from "slices/wallet/thunk";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { AppDispatch } from "store";

export default function ConnectWallet() {
  const { open } = useWeb3Modal();
  const provider = new BrowserProvider(window.ethereum);
  const { address, chainId, status } = useAccount();
  const { nonce } = useSelector((state: any) => state.wallet.data);
  const { logged } = useSelector((state: any) => state.user.data);

  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    if (status === "connected" && !logged) {
      signInWithEthereumLocal(address, chainId!, nonce, provider).then(
        (data) => {
          dispatch(verifySignatureAsync(data));
        }
      );
    }
  }, [status]);

  return (
    <Button
      type="button"
      className="btn btn-icon btn-topbar btn-ghost-dark rounded-circle text-muted"
      onClick={() => open({ view: "Connect" })}
    >
      <i className="bi bi-coin fs-20"></i>
    </Button>
  );
}
