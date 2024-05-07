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
    addToWishlistStart(state) {
      state.loading = true;
      state.error = null;
    },

    addToWishlistSuccess(state, action) {
      state.data.items.push(action.payload as never);
      state.loading = false;
    },

    addToWishlistError(state, { payload: { error } }) {
      state.error = error;
      state.loading = false;
    },

    removeFromWishlistStart(state) {
      state.loading = true;
      state.error = null;
    },

    removeFromWishlistSuccess(state, { payload: { slug } }) {
      console.log(slug);
      state.data.items = state.data.items.filter((item: any) => {
        return item.slug !== slug;
      });
      state.loading = false;
    },

    removeFromWishlistError(state, { payload: { error } }) {
      state.error = error;
      state.loading = false;
    },
  },
});

export const {
  fetchWishlistStart,
  fetchWishlistSuccess,
  fetchWishlistError,
  addToWishlistError,
  addToWishlistStart,
  addToWishlistSuccess,
  removeFromWishlistError,
  removeFromWishlistStart,
  removeFromWishlistSuccess,
} = wishlistSlice.actions;

export default wishlistSlice.reducer;
