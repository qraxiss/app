import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    count: 0,
    items: [],
    price: 0,
}

export const incretementAsync = createAsyncThunk(
    'cart/'
)