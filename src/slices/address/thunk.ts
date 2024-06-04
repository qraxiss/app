import { createAsyncThunk } from "@reduxjs/toolkit";
import { shopcekQuery, shopcekMutation } from "graphql/apollo/helpers";

import { GET_ADDRESSES } from "graphql/address/queries";
import { UPDATE_ADDRESS } from "graphql/address/mutations";

import {
  fetchAddressesFailure,
  fetchAddressesStart,
  fetchAddressesSuccess,
  updateAddressFailure,
  updateAddressStart,
  updateAddressSuccess,
} from "slices/address/slice";

export const fetchAddressesAsync = createAsyncThunk(
  "address/fetchAddress",
  async (_, { dispatch }) => {
    try {
      dispatch(fetchAddressesStart());

      const { data } = await shopcekQuery({
        query: GET_ADDRESSES,
        options: {
          fetchPolicy: "no-cache",
        } as any,
      });

      dispatch(fetchAddressesSuccess(data));
    } catch (error: any) {
      dispatch(fetchAddressesFailure(error.message));
    }
  }
);

export const updateAddressAsync = createAsyncThunk(
  "address/updateAddress",
  async ({ recipient, title }: any, { dispatch }) => {
    try {
      dispatch(updateAddressStart());

      const { data, error } = await shopcekMutation({
        mutation: UPDATE_ADDRESS,
        options: {
          variables: {
            recipient,
            title,
          },
        } as any,
      });

      if (error) {
        dispatch(updateAddressFailure(error.message));
        return;
      }

      dispatch(updateAddressSuccess(data));
      await dispatch(fetchAddressesAsync());
    } catch (error: any) {
      dispatch(updateAddressFailure(error.message));
    }
  }
);
