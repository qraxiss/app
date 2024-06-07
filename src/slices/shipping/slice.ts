import { ShippingOption } from "types/shipping";
import { createSlice } from "@reduxjs/toolkit";

const initialState: {
  data: ShippingOption[];
  loading: boolean;
  error: Error | null;
} = {
  data: [],
  loading: false,
  error: null,
};

const shippingSlice = createSlice({
  name: "shipping",
  initialState,
  reducers: {
    fetchShippingStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchShippingSuccess(state, { payload: options }) {
      state.data = options;
      state.loading = false;
    },
    fetchShippingFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  fetchShippingFailure,
  fetchShippingStart,
  fetchShippingSuccess,
} = shippingSlice.actions;

export default shippingSlice.reducer;
