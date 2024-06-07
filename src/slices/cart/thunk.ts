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
  fetchShippingStart,
  fetchShippingFailure,
  fetchShippingSuccess,
} from "slices/cart/slice";

import {
  ADD_ITEM_TO_CART,
  DELETE_CART_ITEM,
  UPDATE_CART_ITEM,
  EMPTY_CART,
} from "graphql/cart/mutations";
import { GET_CART, SHIPPING_RATES } from "graphql/cart/queries";

export const fetchCartAsync = createAsyncThunk(
  "cart/fetchCart",
  async (_, { dispatch }) => {
    try {
      dispatch(fetchCartStart());

      const { data } = await shopcekQuery({
        query: GET_CART,
        options: {
          fetchPolicy: "no-cache",
        } as any,
      });

      dispatch(fetchCartSuccess(data));
    } catch (error: any) {
      dispatch(fetchCartFailure(error.message));
    }
  }
);

export const fetchShippingAsync = createAsyncThunk(
  "cart/fetchShipping",
  async (_, { dispatch }) => {
    try {
      dispatch(fetchShippingStart());

      const { data } = await shopcekQuery({
        query: SHIPPING_RATES,
        options: {
          fetchPolicy: "no-cache",
        } as any,
      });

      dispatch(fetchShippingSuccess(data));
    } catch (error: any) {
      dispatch(fetchShippingFailure(error.message));
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

      const {
        data: { status },
      } = await shopcekMutation<any>({
        mutation: ADD_ITEM_TO_CART,
        options: {
          variables: {
            variantId,
            count,
          },
        } as any,
      });
      if (status) {
        await dispatch(fetchCartAsync());
        dispatch(addItemSuccess());
      }
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
        data: { status },
      } = await shopcekMutation<any>({
        mutation: EMPTY_CART,
      });

      if (status) {
        await dispatch(fetchCartAsync());
        dispatch(emptySuccess());
      } else {
        dispatch(emptyFailure("Empty cart operation not success"));
      }
    } catch (error: any) {
      dispatch(emptyFailure(error.message));
    }
  }
);

export const deleteCartItem = createAsyncThunk(
  "cart/deleteItem",
  async ({ itemId }: { itemId: number | string }, { dispatch }) => {
    try {
      dispatch(removeItemStart());

      const {
        data: { status },
      } = await shopcekMutation<any>({
        mutation: DELETE_CART_ITEM,
        options: {
          variables: {
            itemId,
          },
        } as any,
      });

      if (status) {
        await dispatch(fetchCartAsync());
        dispatch(removeItemSuccess());
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
        data: { status },
      } = await shopcekMutation<any>({
        mutation: UPDATE_CART_ITEM,
        options: {
          variables: {
            itemId,
            count,
          },
        } as any,
      });

      if (status) {
        await dispatch(fetchCartAsync());
        dispatch(updateItemSuccess());
      } else {
        dispatch(updateItemFailure("Empty cart operation not success"));
      }
    } catch (error: any) {
      dispatch(updateItemFailure(error.message));
    }
  }
);
