import { createSlice } from "@reduxjs/toolkit";
import { Otp } from "../Apis/Otp";

export const OtpSlice = createSlice({
  name: "otp",
  initialState: {
    otp: null,
    authenticatingotp: false,
    authenticated: false,
    isError: false,
    errors: null
  },
  reducers: {
    clearState: (state) => {
      state.otp = null;
      state.isError = false;
      state.authenticated = false;
      state.authenticatingotp = false;
      return state;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(Otp.fulfilled, (state, action) => {
      state.otp = action.payload;
      state.authenticated = false;
      state.authenticatingotp = false;
      return state;
    });
    builder.addCase(Otp.pending, (state, action) => {
      state.authenticatingotp = true;
      state.authenticated = true;
    });
    builder.addCase(Otp.rejected, (state, action) => {
      state.errors = action.errors || action.payload;
      state.authenticated = false;
      state.authenticatingotp = false;
      state.isError = true;
      return state;
    });
  }
});

export const { clearState } = OtpSlice.actions;

export const OtpSelector = (state) => state.otp;
