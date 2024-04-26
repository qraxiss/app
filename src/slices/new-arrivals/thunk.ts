import { createAsyncThunk } from "@reduxjs/toolkit";
import { shopcekQuery } from "graphql/apollo/helpers";
import { fetchNewArrivalsStart, fetchNewArrivalsSuccess, fetchNewArrivalsFailure } from "./slice";
import { GET_NEW_ARRIVALS } from "graphql/new-arrivals/queries";

export const fetchNewArrivalsAsync = createAsyncThunk(
  'categories/fetchNewArrivals',
  async (_, { dispatch }) => {
    try {
      dispatch(fetchNewArrivalsStart());

      // get category data from graphql
      const { data } = await shopcekQuery<any[]>({
        query: GET_NEW_ARRIVALS,
      });

      dispatch(fetchNewArrivalsSuccess(data));
    } catch (error: any) {
      dispatch(fetchNewArrivalsFailure(error.message));
    }
  },
);
