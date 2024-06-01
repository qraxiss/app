import { createAsyncThunk } from "@reduxjs/toolkit";
import { shopcekQuery, shopcekMutation } from "graphql/apollo/helpers";

import { GET_ADDRESS } from "graphql/address/queries";
import { UPDATE_ADDRESS } from "graphql/address/mutations";

import {
  fetchAddressFailure,
  fetchAddressStart,
  fetchAddressSuccess,
  updateAddressFailure,
  updateAddressStart,
  updateAddressSuccess,
} from "slices/address/slice";

export const fetchAddressAsync = createAsyncThunk(
  "address/fetchAddress",
  async (_, { dispatch }) => {
    try {
      dispatch(fetchAddressStart());

      const { data } = await shopcekQuery({
        query: GET_ADDRESS,
      });

      dispatch(fetchAddressSuccess(data));
    } catch (error: any) {
      dispatch(fetchAddressFailure(error.message));
    }
  }
);

export const updateAddressAsync = createAsyncThunk(
  "address/updateAddress",
  async (recipient, { dispatch }) => {
    try {
      dispatch(updateAddressStart());

      const { data } = await shopcekMutation({
        mutation: UPDATE_ADDRESS,
        options: {
          variables: {
            recipient,
          },
        } as any,
      });

      dispatch(updateAddressSuccess(data));
    } catch (error: any) {
      dispatch(updateAddressFailure(error.message));
    }
  }
);
