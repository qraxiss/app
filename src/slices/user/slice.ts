import { createSlice } from "@reduxjs/toolkit";

const jwt = localStorage.getItem("jwt");
const address = localStorage.getItem("jwt");

const logged = jwt ? true : false;

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
  },
});

export const { login } = userSlice.actions;

export default userSlice.reducer;
