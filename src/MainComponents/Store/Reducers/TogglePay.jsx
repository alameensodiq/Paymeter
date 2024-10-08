import { createSlice } from "@reduxjs/toolkit";
import { TogglePay } from "../Apis/TogglePay";

export const TogglePaySlice = createSlice({
  name: "togglepay",
  initialState: {
    togglepay: null,
    authenticatingtogglepay: false,
    authenticated: false,
    isError: false,
    errors: null
  },
  reducers: {
    clearState: (state) => {
      state.togglepay = null;
      state.isError = false;
      state.authenticated = false;
      state.authenticatingtogglepay = false;
      return state;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(TogglePay.fulfilled, (state, action) => {
      state.togglepay = action.payload;
      state.authenticated = false;
      state.authenticatingtogglepay = false;
      return state;
    });
    builder.addCase(TogglePay.pending, (state, action) => {
      state.authenticatingtogglepay = true;
      state.authenticated = true;
    });
    builder.addCase(TogglePay.rejected, (state, action) => {
      state.errors = action.errors || action.payload;
      state.authenticated = false;
      state.authenticatingtogglepay = false;
      state.isError = true;
      return state;
    });
  }
});

export const { clearState } = TogglePaySlice.actions;

export const TogglePaySelector = (state) => state.togglepay;
