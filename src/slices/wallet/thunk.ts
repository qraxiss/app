import { createAsyncThunk } from "@reduxjs/toolkit";
import { shopcekMutation, shopcekQuery } from "graphql/apollo/helpers";
import {
  fetchNonceFailure,
  fetchNonceStart,
  fetchNonceSuccess,
  verifySignatureFailure,
  verifySignatureStart,
  verifySignatureSuccess,
} from "./slice";

import { login } from "slices/user/slice";

import { VERIFY } from "graphql/wallet/mutations";
import { GET_NONCE } from "graphql/wallet/queries";
import { VERIFY as VERIFY_INPUT } from "types/wallet";

export const fetchNonceAsync = createAsyncThunk(
  "wallet/fetchNonce",
  async (_, { dispatch }) => {
    try {
      dispatch(fetchNonceStart());

      const { data } = await shopcekQuery<string>({
        query: GET_NONCE,
      });

      dispatch(fetchNonceSuccess(data));
    } catch (error: any) {
      dispatch(fetchNonceFailure(error.message));
    }
  }
);

export const verifySignatureAsync = createAsyncThunk(
  "wallet/verifySignature",
  async ({ address, message, signature }: VERIFY_INPUT, { dispatch }) => {
    try {
      dispatch(verifySignatureStart());
      const { data } = await shopcekMutation<string>({
        mutation: VERIFY,

        // TODO: options parameter require query or mutation, we should send mutation in options field.
        options: {
          variables: {
            message,
            signature,
          },
        } as any,
      });

      dispatch(verifySignatureSuccess());
      dispatch(login({ address, jwt: data }));
    } catch (error: any) {
      dispatch(verifySignatureFailure(error.message));
    }
  }
);
