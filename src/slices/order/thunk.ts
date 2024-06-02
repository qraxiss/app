import { createAsyncThunk } from "@reduxjs/toolkit";
import { shopcekMutation, shopcekQuery } from "graphql/apollo/helpers";

import {
  fetchOrdersFailure,
  fetchOrdersStart,
  fetchOrdersSuccess,
  purchaseItemFailure,
  purchaseItemStart,
  purchaseItemSuccess,
} from "slices/order/slice";

import { fetchCartAsync } from "slices/thunk";

import { NEW_ORDER } from "graphql/order/mutations";
import { ORDERS } from "graphql/order/queries";

import { payment } from "wallet/payment";
import { store } from "store";

export const fetchOrdersAsync = createAsyncThunk(
  "order/fetchOrders",
  async (_, { dispatch }) => {
    try {
      dispatch(fetchOrdersStart());

      const { data } = await shopcekQuery<any>({
        query: ORDERS,
        options: {
          fetchPolicy: "no-cache",
        } as any,
      });

      dispatch(fetchOrdersSuccess({ orders: data }));
    } catch (error: any) {
      dispatch(fetchOrdersFailure(error));
    }
  },
);

export const purchaseItemAsync = createAsyncThunk(
  "order/purchaseItem",
  async (_, { dispatch }) => {
    try {
      dispatch(purchaseItemStart());
      const state = store.getState();
      const { BNBUSDT } = state.cryptoMarket.data;
      const { price } = state.cart.data;
      const transaction = await payment(1 / BNBUSDT); // for test shoppings.
      const { data, error } = await shopcekMutation<any>({
        mutation: NEW_ORDER,
        options: {
          variables: {
            transaction,
          },
        } as any,
      });

      if (error) {
        dispatch(purchaseItemFailure(error));
        return;
      }

      dispatch(purchaseItemSuccess(data));

      await dispatch(fetchOrdersAsync());
      await dispatch(fetchCartAsync());
    } catch (error: any) {
      dispatch(purchaseItemFailure(error));
    }
  },
);
