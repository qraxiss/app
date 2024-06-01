import { createAsyncThunk } from "@reduxjs/toolkit";
import { shopcekQuery, shopcekMutation } from "graphql/apollo/helpers";

import { GET_ADDRESS } from "graphql/address/queries";
import { UPDATE_ADDRESS } from "graphql/address/mutations";

import {
  fetchAddressFailure,
  fetchAddressStart,
  fetchAddressSuccess,
} from "slices/address/slice";

