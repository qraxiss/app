import { empty } from "@apollo/client";
import { createSlice } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";

const initialState: {
  loading: boolean;
  error: Error | null;
  data: {
    items: any[];
    price: number;
    count: number;
  };
} = {
  loading: false,
  error: null,
  data: {
    items: [],
    price: 0,
    count: 0,
  },
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    fetchCartStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchCartSuccess(state, { payload: { items, price, count } }) {
      state.loading = false;
      state.data = { items, price, count };
    },
    fetchCartFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    addItemStart(state) {
      state.loading = true;
      state.error = null;
    },
    addItemSuccess(state, { payload: { item } }) {
      state.loading = false;
      state.data.items.push(item);
    },
    addItemFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    removeItemStart(state) {
      state.loading = true;
      state.error = null;
    },
    removeItemSuccess(state, { payload: { itemId } }) {
      state.loading = false;
      state.data.items = state.data.items.filter((item) => {
        return item.id !== itemId;
      });
    },
    removeItemFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    updateItemStart(state) {
      state.loading = false;
      state.error = null;
    },
    updateItemSuccess(state, { payload: { item } }) {
      const idx = state.data.items.findIndex((itemi) => {
        return itemi.id === item.id;
      });
      state.data.items[idx] = item;
    },
    updateItemFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    emptyStart(state) {
      state.loading = true;
      state.error = null;
    },
    emptySuccess(state) {
      state.data.items = [];
      state.loading = false;
    },
    emptyFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  fetchCartFailure,
  fetchCartStart,
  fetchCartSuccess,
  addItemFailure,
  addItemStart,
  addItemSuccess,
  removeItemFailure,
  removeItemStart,
  removeItemSuccess,
  emptyFailure,
  emptyStart,
  emptySuccess,
  updateItemFailure,
  updateItemStart,
  updateItemSuccess,
} = cartSlice.actions;

export default cartSlice.reducer;
