import { createSlice } from "@reduxjs/toolkit";
import { BrowserProvider, Signer } from "ethers";
import { WalletClient } from "viem";

const initialState: {
  loading: boolean;
  error: Error | null;
  data: {
    nonce: string | null;
  };
  provider: BrowserProvider | null;
  client: WalletClient | null;
  signer: Signer | null;
} = {
  loading: false,
  error: null,
  data: {
    nonce: null,
  },
  provider: null,
  client: null,
  signer: null,
};

const walletSlice = createSlice({
  name: "wallet",
  initialState,
  reducers: {
    fetchNonceStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchNonceSuccess(state, action) {
      state.loading = false;
      state.data.nonce = action.payload;
    },
    fetchNonceFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    verifySignatureStart(state) {
      state.loading = true;
      state.error = null;
    },
    verifySignatureSuccess(state) {
      state.loading = false;
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
    setProvider(state, action) {
      state.provider = action.payload;
    },
    setClient(state, action) {
      state.client = action.payload;
    },
    setSigner(state, action) {
      state.signer = action.payload;
    },
  },
});

export const {
  fetchNonceStart,
  fetchNonceSuccess,
  fetchNonceFailure,
  verifySignatureFailure,
  verifySignatureStart,
  verifySignatureSuccess,
  disconnectWalletFailure,
  disconnectWalletStart,
  disconnectWalletSuccess,
  setProvider,
  setClient,
  setSigner,
} = walletSlice.actions;

export default walletSlice.reducer;
