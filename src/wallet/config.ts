import { defaultWagmiConfig } from "@web3modal/wagmi/react/config";
import chains from "./chains";

import icon from "assets/images/icon.svg";

export const projectId = "e2d0ce35fa2c99ac5578cba14294027b";

const metadata = {
  name: "Shopcek",
  description: "Blockchain Fashion",
  url: "https://app.shopcek.com",
  icons: [icon],
};

export default defaultWagmiConfig({
  chains,
  projectId,
  metadata,
});
