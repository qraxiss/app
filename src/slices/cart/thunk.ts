import { createAsyncThunk } from "@reduxjs/toolkit";
import { shopcekMutation, shopcekQuery } from "graphql/apollo/helpers";

import { fetchCartError, fetchCartStart, fetchCartSuccess } from "./slice";

import {
  ADD_ITEM_TO_CART,
  DELETE_CART_ITEM,
  UPDATE_CART_ITEM,
  EMPTY_CART,
} from "graphql/cart/mutations";
import { GET_CART } from "graphql/cart/queries";

export const fetchCartAsync = createAsyncThunk(
  "cart/fetchCart",
  async (_, { dispatch }) => {
    try {
      dispatch(fetchCartStart());

      const { data } = await shopcekQuery({
        query: GET_CART,
      });

      dispatch(fetchCartSuccess(data));
    } catch (error: any) {
      dispatch(fetchCartError(error.message));
    }
  }
);
