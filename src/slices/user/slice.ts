import { createSlice } from "@reduxjs/toolkit";

// wallet
import { disconnectWalletAsync } from "slices/thunk";

const jwt = localStorage.getItem("jwt");
const address = localStorage.getItem("jwt");

const logged = !!jwt && !!address;

const initialState = {
  loading: false,
  error: null,
  data: {
    logged,
    address,
    jwt,
  },
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login(state, { payload: { address, jwt } }) {
      state.data = { address, jwt, logged: true };
      localStorage.setItem("jwt", jwt);
      localStorage.setItem("address", address);
    },

    logout(state) {
      state.data = { logged: false, jwt: null, address: null };
      localStorage.removeItem("jwt");
      localStorage.removeItem("address");
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
