import { createAsyncThunk } from "@reduxjs/toolkit";
import { shopcekQuery } from "graphql/apollo/helpers";

import {
  fetchWishlistStart,
  fetchWishlistError,
  fetchWishlistSuccess,
} from "./slice";

import { WISHLIST } from "graphql/wishlist/queries";

export const fetchWishlistAsync = createAsyncThunk(
  "wishlist/fetchWishlist",
  async (_, { dispatch }) => {
    try {
      dispatch(fetchWishlistStart());
      const { data } = await shopcekQuery<any[]>({
        query: WISHLIST,
      });

      dispatch(fetchWishlistSuccess(data));
    } catch (error: any) {
      dispatch(fetchWishlistError(error.message));
    }
  }
);
