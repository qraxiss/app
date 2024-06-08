import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  fetchShippingFailure,
  fetchShippingStart,
  fetchShippingSuccess,
} from "slices/shipping/slice";
import { SHIPPING_RATES } from "graphql/cart/queries";

import { shopcekQuery } from "graphql/apollo/helpers";

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
  },
);
