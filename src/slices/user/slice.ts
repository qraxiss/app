import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  error: null,
  data: {
    logged: false,
    address: "",
    jwt: "",
  },
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login(state, { payload: { address, jwt } }) {
      state.data = { address, jwt, logged: true };
      localStorage.setItem("jwt", jwt);
    },
  },
});

export const { login } = userSlice.actions;

export default userSlice.reducer;
