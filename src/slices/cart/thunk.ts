import { createAsyncThunk } from "@reduxjs/toolkit";
import { shopcekMutation, shopcekQuery } from "graphql/apollo/helpers";

import {
  fetchCartFailure,
  fetchCartStart,
  fetchCartSuccess,
  addItemStart,
  addItemFailure,
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
} from "./slice";

import {
  ADD_ITEM_TO_CART,
  REMOVE_CART_ITEM,
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
      dispatch(fetchCartFailure(error.message));
    }
  }
);

export const addItemToCartAsync = createAsyncThunk(
  "cart/addItem",
  async (
    { variantId, count }: { variantId: string | number; count: number },
    { dispatch }
  ) => {
    try {
      dispatch(addItemStart());

      const { data } = await shopcekMutation({
        mutation: ADD_ITEM_TO_CART,
        options: {
          variables: {
            variantId,
            count,
          },
        } as any,
      });

      dispatch(addItemSuccess(data));
    } catch (error: any) {
      dispatch(addItemFailure(error.message));
    }
  }
);

export const emptyAsync = createAsyncThunk(
  "cart/empty",
  async (_, { dispatch }) => {
    try {
      dispatch(emptyStart());

      const {
        data: { success },
      } = await shopcekMutation<any>({
        mutation: EMPTY_CART,
      });

      if (success) {
        dispatch(emptySuccess());
      } else {
        dispatch(emptyFailure("Empty cart operation not success"));
      }
    } catch (error: any) {
      dispatch(emptyFailure(error.message));
    }
  }
);

export const removeItemAsync = createAsyncThunk(
  "cart/removeItem",
  async ({ itemId }: { itemId: number | string }, { dispatch }) => {
    try {
      dispatch(removeItemStart());

      const {
        data: { success },
      } = await shopcekMutation<any>({
        mutation: REMOVE_CART_ITEM,
        options: {
          variables: {
            itemId,
          },
        } as any,
      });

      if (success) {
        dispatch(removeItemSuccess({ itemId }));
      } else {
        dispatch(removeItemFailure("Empty cart operation not success"));
      }
    } catch (error: any) {
      dispatch(removeItemFailure(error.message));
    }
  }
);

export const updateItemAsync = createAsyncThunk(
  "cart/updateItem",
  async (
    { itemId, count }: { itemId: number | string; count: number },
    { dispatch }
  ) => {
    try {
      dispatch(updateItemStart());

      const {
        data: { success },
      } = await shopcekMutation<any>({
        mutation: UPDATE_CART_ITEM,
        options: {
          variables: {
            itemId,
            count,
          },
        } as any,
      });

      if (success) {
        dispatch(updateItemSuccess({ itemId, count }));
      } else {
        dispatch(updateItemFailure("Empty cart operation not success"));
      }
    } catch (error: any) {
      dispatch(updateItemFailure(error.message));
    }
  }
);
