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
import { VERIFY } from "graphql/wallet/mutations";
import { GET_NONCE } from "graphql/wallet/queries";
import { VERIFY as VERIFY_INPUT } from "types/wallet";

import { signInWithEthereumLocal } from "wallet/siwe";

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
  async ({ message, signature }: VERIFY_INPUT, { dispatch }) => {
    try {
      dispatch(verifySignatureStart());
      const { data } = await shopcekMutation<string>({
        mutation: VERIFY,

        // TODO: options parameter require query or mutation, we should send mutation in options field.
        //@ts-ignore
        options: {
          variables: {
            message,
            signature,
          },
        },
      });

      dispatch(verifySignatureSuccess(data));
    } catch (error: any) {
      dispatch(verifySignatureFailure(error.message));
    }
  }
);
