import { useWeb3Modal } from "@web3modal/wagmi/react";
import { Button } from "react-bootstrap";

import { signInWithEthereumLocal } from "wallet/siwe";
import { BrowserProvider } from "ethers";

import { useAccount } from "wagmi";
import { verifySignatureAsync } from "slices/wallet/thunk";

import { FC, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { AppDispatch } from "store";

interface ConnectWalletProps {
  buttonText?: string;
}

export const ConnectWallet: FC<ConnectWalletProps> = ({ buttonText }) => {
  const { open } = useWeb3Modal();
  const provider = window.ethereum
    ? new BrowserProvider(window.ethereum)
    : null;
  const { address, chainId, status } = useAccount();
  const { nonce } = useSelector((state: any) => state.wallet.data);
  const { logged } = useSelector((state: any) => state.user.data);

  const [connect, setConnect] = useState(false);

  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    if (status === "connected" && !logged && connect && provider) {
      signInWithEthereumLocal(address, chainId!, nonce, provider).then(
        (data) => {
          dispatch(verifySignatureAsync(data)).then(() => {
            setConnect(false);
          });
        }
      );
    }
  }, [status]);

  const handleConnect = () => {
    open({ view: "Connect" });
    setConnect(true);
  };

  return (
    <>
      {buttonText ? (
        <Button
          type="button"
          className="btn btn-primary"
          onClick={handleConnect}
        >
          {buttonText}
        </Button>
      ) : (
        <Button
          type="button"
          className="btn btn-icon btn-topbar btn-ghost-dark rounded-circle text-muted"
          onClick={handleConnect}
        >
          <i className="bi bi-coin fs-20"></i>
        </Button>
      )}
    </>
  );
};
