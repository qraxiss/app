import { createSlice } from "@reduxjs/toolkit";

const jwt = localStorage.getItem("jwt");

const logged = !!jwt;

const initialState = {
  loading: false,
  error: null,
  data: {
    logged,
    jwt,
  },
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login(state, { payload: { jwt } }) {
      state.data = { jwt, logged: true };
      localStorage.setItem("jwt", jwt);
    },

    logout(state) {
      state.data = { logged: false, jwt: null };
      localStorage.removeItem("jwt");
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
