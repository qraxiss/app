import { createSlice } from "@reduxjs/toolkit";
import { getAccount } from "@wagmi/core";
import config from "wallet/config";

const jwt = localStorage.getItem("jwt");
const address = localStorage.getItem("address");
const signature = localStorage.getItem("signature");

const getAddress = () => {
  return getAccount(config).address;
};

const logged = !!jwt && !!address && !!signature;

const initialState = {
  loading: false,
  error: null,
  data: {
    logged,
    jwt,
    address,
    signature,
  },
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login(state, { payload: { jwt, signature } }) {
      const address = getAddress()!;
      state.data = { address, jwt, signature, logged: true };
      localStorage.setItem("jwt", jwt);
      localStorage.setItem("address", address);
      localStorage.setItem("signature", signature);
    },

    logout(state) {
      state.data = { logged: false, jwt: null, signature: null, address: null };
      localStorage.removeItem("jwt");
      localStorage.removeItem("address");
      localStorage.removeItem("signature");
    },

    logoutStart(state) {
      state.error = null;
      state.loading = true;
    },
    logoutSuccess(state) {
      state.error = null;
      state.loading = false;
    },
    logoutFailure(state, action) {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const { login, logout, logoutFailure, logoutStart, logoutSuccess } =
  userSlice.actions;

export default userSlice.reducer;
