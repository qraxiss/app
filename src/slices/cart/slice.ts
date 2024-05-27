import { createSlice } from "@reduxjs/toolkit";

const initialState: {
  loading: boolean;
  error: Error | null;
  data: {
    items: any[];
    price: number;
    count: number;
    isModalOpen: boolean;
  };
} = {
  loading: false,
  error: null,
  data: {
    items: [],
    price: 0,
    count: 0,
    isModalOpen: false,
  },
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    openModal(state) {
      state.data.isModalOpen = true;
    },
    closeModal(state) {
      state.data.isModalOpen = false;
    },
    fetchCartStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchCartSuccess(state, { payload: { items, count, price } }) {
      state.loading = false;
      state.data = { ...state.data, items, count, price };
    },
    fetchCartFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    addItemStart(state) {
      state.loading = true;
      state.error = null;
    },
    addItemSuccess(state) {
      state.loading = false;
    },
    addItemFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    removeItemStart(state) {
      state.loading = true;
      state.error = null;
    },
    removeItemSuccess(state) {
      state.loading = false;
      // state.data.items = state.data.items.filter((item) => {
      //   return item.id !== itemId;
      // });
    },
    removeItemFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    updateItemStart(state) {
      state.loading = false;
      state.error = null;
    },
    updateItemSuccess(state) {
      state.loading = false;
      // const idx = state.data.items.findIndex((itemi) => {
      //   return itemi.id === item.id;
      // });
      // state.data.items[idx] = item;
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
  closeModal,
  openModal,
} = cartSlice.actions;

export default cartSlice.reducer;
