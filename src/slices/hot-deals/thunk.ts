import { createAsyncThunk } from "@reduxjs/toolkit";
import { shopcekQuery } from "graphql/apollo/helpers";
import {
  fetchHotDealsStart,
  fetchHotDealsSuccess,
  fetchHotDealsFailure,
} from "./slice";
import { GET_HOT_DEALS } from "graphql/hot-deals/queries";

export const fetchHotDealsAsync = createAsyncThunk(
  "categories/fetchNewArrivals",
  async (_, { dispatch }) => {
    try {
      dispatch(fetchHotDealsStart());

      // get hot deals data from graphql
      const { data } = await shopcekQuery<any[]>({
        query: GET_HOT_DEALS,
      });

      dispatch(fetchHotDealsSuccess(data));
    } catch (error: any) {
      dispatch(fetchHotDealsFailure(error.message));
    }
  },
);
