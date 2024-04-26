// productThunks.js
import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  fetchCategoriesStart,
  fetchCategoriesSuccess,
  fetchCategoriesFailure,
} from "./slice";
import { GET_CATEGORIES } from "graphql/category/queries";
import { shopcekQuery } from "graphql/apollo/helpers";

export const fetchCategoriesAsync = createAsyncThunk(
  'categories/fetchCategories',
  async (_, { dispatch }) => {
    try {
      dispatch(fetchCategoriesStart());

      // get category data from graphql
      const { data } = await shopcekQuery<string[]>({
        query: GET_CATEGORIES,
      });

      dispatch(fetchCategoriesSuccess(data));
    } catch (error: any) {
      dispatch(fetchCategoriesFailure(error.message));
    }
  },
);
