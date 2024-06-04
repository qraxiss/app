import { createAsyncThunk } from "@reduxjs/toolkit";

import {
  logout,
  logoutFailure,
  logoutStart,
  logoutSuccess,
} from "slices/user/slice";
import { disconnectWalletAsync } from "slices/thunk";

export const logoutAsync = createAsyncThunk(
  "user/logoutAsync",
  async (_, { dispatch }) => {
    try {
      dispatch(logoutStart());

      await dispatch(disconnectWalletAsync());
      dispatch(logout());

      dispatch(logoutSuccess());
    } catch (error: any) {
      dispatch(logoutFailure(error.message));
    }
  },
);
