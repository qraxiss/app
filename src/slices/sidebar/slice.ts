import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  error: null,
  data: [],
};

const sideBarSlice = createSlice({
  name: "sideBar",
  initialState,
  reducers: {
    fetchSideBarStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchSideBarSuccess(state, action) {
      state.loading = false;
      state.data = action.payload;
    },
    fetchSideBarFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchSideBarStart, fetchSideBarSuccess, fetchSideBarFailure } =
  sideBarSlice.actions;

export default sideBarSlice.reducer;
