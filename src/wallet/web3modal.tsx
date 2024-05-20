import { createWeb3Modal } from "@web3modal/wagmi/react";

import { WagmiProvider } from "wagmi";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import config, { projectId } from "wallet/config";

import { siweConfig } from "./web3modal-siwe";

const queryClient = new QueryClient();

createWeb3Modal({
  wagmiConfig: config,
  projectId,
  siweConfig,
  enableAnalytics: true,
  enableOnramp: true,
});

export default function Web3ModalProvider({ children }: any) {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </WagmiProvider>
  );
}
