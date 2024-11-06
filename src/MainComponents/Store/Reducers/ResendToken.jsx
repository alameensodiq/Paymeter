import { createSlice } from "@reduxjs/toolkit";
import { ResendToken } from "../Apis/ResendToken";

export const ResendTokenSlice = createSlice({
  name: "resendtoken",
  initialState: {
    resendtoken: null,
    authenticatingresendtoken: false,
    authenticated: false,
    isError: false,
    errors: null
  },
  reducers: {
    clearState: (state) => {
      state.resendtoken = null;
      state.isError = false;
      state.authenticated = false;
      state.authenticatingresendtoken = false;
      return state;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(ResendToken.fulfilled, (state, action) => {
      state.resendtoken = action.payload;
      state.authenticated = false;
      state.authenticatingresendtoken = false;
      return state;
    });
    builder.addCase(ResendToken.pending, (state, action) => {
      state.authenticatingresendtoken = true;
      state.authenticated = true;
    });
    builder.addCase(ResendToken.rejected, (state, action) => {
      state.errors = action.errors || action.payload;
      state.authenticated = false;
      state.authenticatingresendtoken = false;
      state.isError = true;
      return state;
    });
  }
});

export const { clearState } = ResendTokenSlice.actions;

export const ResendTokenSelector = (state) => state.resendtoken;
