import { createSlice } from "@reduxjs/toolkit";

const initialState = {
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
    fetchCartError(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchCartError, fetchCartStart, fetchCartSuccess } =
  cartSlice.actions;

export default cartSlice.reducer;
