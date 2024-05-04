import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  error: null,
  data: {
    nonce: "",
    jwt: "",
  },
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
    verifySignatureSuccess(state, action) {
      state.loading = false;
      state.data.jwt = action.payload;
    },
    verifySignatureFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
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
} = walletSlice.actions;

export default walletSlice.reducer;
