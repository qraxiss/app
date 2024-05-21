import { createSlice } from "@reduxjs/toolkit";
import { BrowserProvider, Signer } from "ethers";
import UniversalProvider from "@walletconnect/universal-provider";
import { WalletClient } from "viem";

const initialState: {
  loading: boolean;
  error: Error | null;
  data: {
    signature: string | null;
  };
} = {
  loading: false,
  error: null,
  data: {
    signature: null,
  },
};

const walletSlice = createSlice({
  name: "wallet",
  initialState,
  reducers: {
    verifySignatureStart(state) {
      state.loading = true;
      state.error = null;
    },
    verifySignatureSuccess(state, action) {
      state.loading = false;
      state.data.signature = action.payload;
    },
    verifySignatureFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    disconnectWalletStart(state) {
      state.loading = true;
      state.error = null;
    },
    disconnectWalletSuccess(state) {
      state.loading = false;
    },
    disconnectWalletFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  verifySignatureFailure,
  verifySignatureStart,
  verifySignatureSuccess,
  disconnectWalletFailure,
  disconnectWalletStart,
  disconnectWalletSuccess,
} = walletSlice.actions;

export default walletSlice.reducer;
