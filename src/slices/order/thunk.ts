import { createAsyncThunk } from "@reduxjs/toolkit";
import { shopcekMutation, shopcekQuery } from "graphql/apollo/helpers";

import {
  fetchOrdersFailure,
  fetchOrdersStart,
  fetchOrdersSuccess,
  purchaseItemFailure,
  purchaseItemStart,
  purchaseItemSuccess,
} from "./slice";

import { NEW_ORDER } from "graphql/order/mutations";
import { ORDERS } from "graphql/order/queries";

export const fetchOrdersAsync = createAsyncThunk(
  "order/fetchOrders",
  async (_, { dispatch }) => {
    try {
      dispatch(fetchOrdersStart());

      const { data } = await shopcekQuery<any>({
        query: ORDERS,
      });

      dispatch(fetchOrdersSuccess({ orders: data }));
    } catch (error: any) {
      dispatch(fetchOrdersFailure({ error: error.message }));
    }
  }
);

export const purchaseItemAsync = createAsyncThunk(
  "order/purchaseItem",
  async (_, { dispatch }) => {
    try {
      dispatch(purchaseItemStart());

      const { data } = await shopcekMutation<any>({
        mutation: NEW_ORDER,
      });

      await dispatch(fetchOrdersAsync());
      dispatch(purchaseItemSuccess());
    } catch (error: any) {
      dispatch(purchaseItemFailure({ error: error.message }));
    }
  }
);
