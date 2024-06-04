import { createAsyncThunk } from "@reduxjs/toolkit";
import { shopcekQuery, shopcekMutation } from "graphql/apollo/helpers";

import { GET_ADDRESSES } from "graphql/address/queries";
import {
  UPDATE_ADDRESS,
  CREATE_ADDRESS,
  DELETE_ADDRESS,
} from "graphql/address/mutations";

import {
  fetchAddressesFailure,
  fetchAddressesStart,
  fetchAddressesSuccess,
  updateAddressFailure,
  updateAddressStart,
  updateAddressSuccess,
  createAdddressFailure,
  createAddressStart,
  createAddressSuccess,
  deleteAdddressFailure,
  deleteAddressStart,
  deleteAddressSuccess,
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

export const createAddressAsync = createAsyncThunk(
  "address/createAddress",
  async ({ recipient }: any, { dispatch }) => {
    try {
      dispatch(createAddressStart());

      const { data, error } = await shopcekMutation({
        mutation: CREATE_ADDRESS,
        options: {
          variables: {
            recipient,
          },
        } as any,
      });

      if (error) {
        dispatch(createAdddressFailure(error.message));
        return;
      }

      dispatch(createAddressSuccess());

      await dispatch(fetchAddressesAsync());
    } catch (error: any) {
      dispatch(createAdddressFailure(error.message));
    }
  }
);

export const deleteAddressAsync = createAsyncThunk(
  "address/deleteAddress",
  async ({ title }: any, { dispatch }) => {
    try {
      dispatch(deleteAddressStart());

      const { data, error } = await shopcekMutation({
        mutation: DELETE_ADDRESS,
        options: {
          variables: {
            title,
          },
        } as any,
      });

      if (error) {
        dispatch(deleteAdddressFailure(error.message));
        return;
      }

      dispatch(deleteAddressSuccess());

      await dispatch(fetchAddressesAsync());
    } catch (error: any) {
      dispatch(deleteAdddressFailure(error.message));
    }
  }
);
