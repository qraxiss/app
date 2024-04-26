import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  error: null,
  data: [],
};

const hotDealsSlice = createSlice({
  name: "hotDeals",
  initialState,
  reducers: {
    fetchHotDealsStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchHotDealsSuccess(state, action) {
      state.loading = false;
      state.data = action.payload;
    },
    fetchHotDealsFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchHotDealsStart, fetchHotDealsSuccess, fetchHotDealsFailure } =
hotDealsSlice.actions;

export default hotDealsSlice.reducer;
