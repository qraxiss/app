import config from "wallet/config";
import { sendTransaction } from "@wagmi/core";
import { parseEther } from "viem";

export async function payment(ether: number | string) {
  return await sendTransaction(config, {
    to: "0x670c92C292b69eBf8F1899375f67Eb5C6515BBA2",
    value: parseEther(String(ether)),
  });
}
