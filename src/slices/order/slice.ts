import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  orders: {
    loading: false,
    error: null,
    data: [],
  },

  purchase: {
    loading: false,
    error: null,
  },
};

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    fetchOrdersStart(state) {
      state.orders.loading = true;
      state.orders.error = null;
    },
    fetchOrdersSuccess(state, { payload: { orders } }) {
      state.orders.loading = false;
      state.orders.error = null;
      state.orders.data = orders;
    },
    fetchOrdersFailure(state, { payload: { message } }) {
      state.orders.loading = true;
      state.orders.error = message;
    },
    purchaseItemStart(state) {
      state.purchase.loading = true;
      state.purchase.error = null;
    },
    purchaseItemSuccess(state) {
      state.purchase.loading = false;
      state.purchase.error = null;
    },
    purchaseItemFailure(state, { payload: { message } }) {
      state.purchase.loading = false;
      state.purchase.error = message;
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
