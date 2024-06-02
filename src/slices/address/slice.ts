import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  loading: false,
  error: null,
};

const addressSlice = createSlice({
  name: "address",
  initialState,
  reducers: {
    fetchAddressesStart(state) {
      state.loading = true;
      state.error = null;
    },

    fetchAddressesSuccess(state, { payload: address }) {
      state.data = address;
      state.loading = false;
      state.error = null;
    },

    fetchAddressesFailure(state, { payload: error }) {
      state.error = error;
      state.loading = false;
    },

    updateAddressStart(state) {
      state.loading = true;
      state.error = null;
    },

    updateAddressSuccess(state, { payload: address }) {
      state.data = address;
      state.loading = false;
      state.error = null;
    },

    updateAddressFailure(state, { payload: error }) {
      state.error = error;
      state.loading = false;
    },
  },
});

export const {
  fetchAddressesFailure,
  fetchAddressesStart,
  fetchAddressesSuccess,
  updateAddressFailure,
  updateAddressStart,
  updateAddressSuccess,
} = addressSlice.actions;

export default addressSlice.reducer;
