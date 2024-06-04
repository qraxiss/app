import { createAsyncThunk } from "@reduxjs/toolkit";
import { shopcekMutation, shopcekQuery } from "graphql/apollo/helpers";

import {
  fetchWishlistStart,
  fetchWishlistError,
  fetchWishlistSuccess,
  addToWishlistError,
  addToWishlistStart,
  addToWishlistSuccess,
  removeFromWishlistError,
  removeFromWishlistStart,
  removeFromWishlistSuccess,
} from "slices/wishlist/slice";

import { WISHLIST } from "graphql/wishlist/queries";
import {
  ADD_TO_WISHLIST,
  REMOVE_FROM_WISHLIST,
} from "graphql/wishlist/mutations";

export const fetchWishlistAsync = createAsyncThunk(
  "wishlist/fetchWishlist",
  async (_, { dispatch }) => {
    try {
      dispatch(fetchWishlistStart());
      const { data } = await shopcekQuery<any[]>({
        query: WISHLIST,
        options: {
          fetchPolicy: "no-cache",
        } as any,
      });

      dispatch(fetchWishlistSuccess(data));
    } catch (error: any) {
      dispatch(fetchWishlistError(error.message));
    }
  },
);

export const addToWishlistAsync = createAsyncThunk(
  "wishlist/addToWishlistAsync",
  async (item: any, { dispatch }) => {
    try {
      dispatch(addToWishlistStart());

      const { data } = await shopcekMutation({
        mutation: ADD_TO_WISHLIST,
        options: {
          variables: {
            slug: item.slug,
          },
        } as any,
      });

      dispatch(addToWishlistSuccess(item));
    } catch (error: any) {
      dispatch(addToWishlistError(error.message));
    }
  },
);

export const removeFromWishlistAsync = createAsyncThunk(
  "wishlist/removeFromWishlistAsync",
  async (item: any, { dispatch }) => {
    try {
      dispatch(removeFromWishlistStart());

      const { data } = await shopcekMutation({
        mutation: REMOVE_FROM_WISHLIST,
        options: {
          variables: {
            slug: item.slug,
          },
        } as any,
      });

      dispatch(removeFromWishlistSuccess(item));
    } catch (error: any) {
      dispatch(removeFromWishlistError(error.message));
    }
  },
);
