import { defaultWagmiConfig } from "@web3modal/wagmi/react/config";
import { QueryClient } from "@tanstack/react-query";

import chains from "./chains";

// 0. Setup queryClient
const queryClient = new QueryClient();

// 1. Get projectId at https://cloud.walletconnect.com
export const projectId = "e2d0ce35fa2c99ac5578cba14294027b";

// 2. Create wagmiConfig
const metadata = {
  name: "Web3Modal",
  description: "Web3Modal Example",
  url: "https://web3modal.com", // origin must match your domain & subdomain
  icons: ["https://avatars.githubusercontent.com/u/37784886"],
};

export default defaultWagmiConfig({
  chains: chains,
  projectId,
  metadata,
  //   ...wagmiOptions // Optional - Override createConfig parameters
});
