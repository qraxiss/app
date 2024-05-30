import { createAsyncThunk } from "@reduxjs/toolkit";
import { shopcekMutation } from "graphql/apollo/helpers";
import {
  verifySignatureFailure,
  verifySignatureStart,
  verifySignatureSuccess,
  disconnectWalletFailure,
  disconnectWalletStart,
  disconnectWalletSuccess,
} from "slices/wallet/slice";

import { VERIFY } from "graphql/wallet/mutations";
import { VERIFY as VERIFY_INPUT } from "types/wallet";

//wallet
import { disconnect } from "@wagmi/core";
import config from "wallet/config";

export const verifySignatureAsync = createAsyncThunk(
  "wallet/verifySignature",
  async ({ message, signature }: VERIFY_INPUT, { dispatch }) => {
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

      dispatch(verifySignatureSuccess(signature));
      dispatch({ type: "user/login", payload: { jwt: data } });
    } catch (error: any) {
      dispatch(verifySignatureFailure(error.message));
    }
  },
);

export const disconnectWalletAsync = createAsyncThunk(
  "wallet/disconnect",
  async (_, { dispatch }) => {
    try {
      dispatch(disconnectWalletStart());

      await disconnect(config);

      dispatch(disconnectWalletSuccess());
    } catch (error: any) {
      dispatch(disconnectWalletFailure(error.message));
    }
  },
);
