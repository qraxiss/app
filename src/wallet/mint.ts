import { getContract } from "wallet/helpers";
import { store } from "store";

import { Order } from "types/mint";

export async function safeMint(receiptData: Order[]) {
  const { address } = store.getState().user.data;

  try {
    const contract = await getContract();
    const tx = await contract!.safeMint(address, receiptData);
    console.log("Transaction sent:", tx.hash);

    // Wait for the transaction to be mined
    const receipt = await tx.wait();
    console.log("Transaction mined:", receipt);
  } catch (error) {
    console.error("Transaction failed:", error);
  }
}
