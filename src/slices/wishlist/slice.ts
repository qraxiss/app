import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  error: null,
  data: {
    items: [],
  },
};

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    fetchWishlistStart(state) {
      state.loading = true;
      state.error = null;
    },

    fetchWishlistSuccess(state, { payload: { items } }) {
      state.data.items = items;
      state.loading = false;
    },

    fetchWishlistError(state, { payload: { error } }) {
      state.error = error;
      state.loading = false;
    },
  },
});

export const { fetchWishlistStart, fetchWishlistSuccess, fetchWishlistError } =
  wishlistSlice.actions;

export default wishlistSlice.reducer;
