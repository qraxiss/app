import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  error: null,
  data: [],
};

const newArrivalsSlice = createSlice({
  name: "newArrivals",
  initialState,
  reducers: {
    fetchNewArrivalsStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchNewArrivalsSuccess(state, action) {
      state.loading = false;
      state.data = action.payload;
    },
    fetchNewArrivalsFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchNewArrivalsStart, fetchNewArrivalsSuccess, fetchNewArrivalsFailure } =
  newArrivalsSlice.actions;

export default newArrivalsSlice.reducer;
