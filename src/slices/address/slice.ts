import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: {},
  loading: false,
  error: null,
};

const addressSlice = createSlice({
  name: "address",
  initialState,
  reducers: {
    fetchAddressStart(state) {
      state.loading = true;
      state.error = null;
    },

    fetchAddressSuccess(state, { payload: address }) {
      state.data = address;
      state.loading = false;
      state.error = null;
    },

    fetchAddressFailure(state, { payload: error }) {
      state.error = error;
      state.loading = false;
    },
  },
});

export const { fetchAddressFailure, fetchAddressStart, fetchAddressSuccess } =
  addressSlice.actions;

export default addressSlice.reducer;
