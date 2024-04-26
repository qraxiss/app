// productThunks.js
import { createAsyncThunk } from "@reduxjs/toolkit";
import { shopcekQuery } from "graphql/apollo/helpers";
import { fetchSideBarFailure, fetchSideBarStart, fetchSideBarSuccess } from "./slice";
import { GET_SideBar } from "graphql/sidebar/queries";

export const fetchSideBarAsync = createAsyncThunk(
  'categories/fetchSideBar',
  async (_, { dispatch }) => {
    try {
      dispatch(fetchSideBarStart());

      // get category data from graphql
      const { data } = await shopcekQuery<any[]>({
        query: GET_SideBar,
      });

      dispatch(fetchSideBarSuccess(data));
    } catch (error: any) {
      dispatch(fetchSideBarFailure(error.message));
    }
  },
);
