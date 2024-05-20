import { useWeb3Modal } from "@web3modal/wagmi/react";
import { getWalletClient } from "wagmi/actions";
import { BrowserProvider } from "ethers";
import { useAccount } from "wagmi";
import { WalletClient } from "viem";
import { siweConfig } from "wallet/web3modal-siwe";
import config from "wallet/config";

import { Button } from "react-bootstrap";
import { FC, useEffect, useState } from "react";
import { useSelector } from "react-redux";
interface ConnectWalletProps {
  buttonText?: string;
}

const clientToProviderSigner = async (client: WalletClient) => {
  const { account, chain, transport } = client;
  const network = {
    chainId: chain?.id,
    name: chain?.name,
    ensAddress: chain?.contracts?.ensRegistry?.address,
  };
  // You can use whatever provider that fits your need here.
  const provider = new BrowserProvider(transport, network);
  const signer = await provider.getSigner(account?.address);
  return { provider, signer };
};

export const ConnectWallet: FC<ConnectWalletProps> = ({ buttonText }) => {
  const { open } = useWeb3Modal();
  const { status, chainId } = useAccount();
  const { logged } = useSelector((state: any) => state.user.data);
  const [connect, setConnect] = useState(false);

  useEffect(() => {
    async function connectWallet() {
      if (status === "connected") {
        const client = await getWalletClient(config);
        const { provider, signer } = await clientToProviderSigner(client);

        if (!logged && connect && provider) {
          const address = await signer.getAddress();
          const nonce = await siweConfig.getNonce();

          const message = siweConfig.createMessage({
            nonce,
            address,
            chainId,
          } as any);

          const signature = await signer.signMessage(message);

          siweConfig.verifyMessage({ message, signature });
        }
      }
    }

    connectWallet();
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
