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
      console.log(address);
      state.loading = false;
      state.error = null;
    },

    updateAddressFailure(state, { payload: error }) {
      state.error = error;
      state.loading = false;
    },

    createAddressStart(state) {
      state.error = null;
      state.loading = true;
    },

    createAddressSuccess(state) {
      state.error = null;
      state.loading = false;
    },

    createAdddressFailure(state, { payload: error }) {
      state.error = error;
      state.loading = false;
    },

    deleteAddressStart(state) {
      state.error = null;
      state.loading = true;
    },

    deleteAddressSuccess(state) {
      state.error = null;
      state.loading = false;
    },

    deleteAdddressFailure(state, { payload: error }) {
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
  createAdddressFailure,
  createAddressStart,
  createAddressSuccess,
  deleteAdddressFailure,
  deleteAddressStart,
  deleteAddressSuccess,
} = addressSlice.actions;

export default addressSlice.reducer;
