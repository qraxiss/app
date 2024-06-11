import { ShippingOption } from "types/shipping";
import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "store";

const initialState: {
  data: {
    selected: string | null;
    options: ShippingOption[];
  };
  loading: boolean;
  error: Error | null;
} = {
  data: {
    selected: null,
    options: [],
  },
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
      state.data.options = options;
      state.loading = false;
    },
    fetchShippingFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    select(state, { payload: id }) {
      state.data.selected = id;
    },
  },
});

export const {
  fetchShippingFailure,
  fetchShippingStart,
  fetchShippingSuccess,
  select,
} = shippingSlice.actions;

export const selectors = {
  selected: (state: RootState) => state.shipping.data.selected,
};

export default shippingSlice.reducer;
