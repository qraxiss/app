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

export const fetchAddressAsync = createAsyncThunk(
  "address/fetchAddress",
  async (title, { dispatch }) => {
    try {
      dispatch(fetchAddressesStart());

      const { data } = await shopcekQuery({
        query: GET_ADDRESSES,
        // options: {
        //   variables: {
        //     title,
        //   },
        // } as any,
      });

      dispatch(fetchAddressesSuccess(data));
    } catch (error: any) {
      dispatch(fetchAddressesFailure(error.message));
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
