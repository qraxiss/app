import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  error: null,
  data: {
    orders: [],
  },
};

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    fetchOrdersStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchOrdersSuccess(state, { payload: { orders } }) {
      state.loading = false;
      state.error = null;
      state.data.orders = orders;
    },
    fetchOrdersFailure(state, { payload: { message } }) {
      state.loading = true;
      state.error = message;
    },
    purchaseItemStart(state) {
      state.loading = true;
      state.error = null;
    },
    purchaseItemSuccess(state) {
      state.loading = false;
      state.error = null;
    },
    purchaseItemFailure(state, { payload: { message } }) {
      state.loading = false;
      state.error = message;
    },
  },
});

export const {
  fetchOrdersFailure,
  fetchOrdersStart,
  fetchOrdersSuccess,
  purchaseItemFailure,
  purchaseItemStart,
  purchaseItemSuccess,
} = orderSlice.actions;

export default orderSlice.reducer;
