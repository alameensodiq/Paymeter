import { createSlice } from "@reduxjs/toolkit";
import { WithdrawalOtp } from "../Apis/WithdrawalOtp";

export const WithdrawalOtpSlice = createSlice({
  name: "withdrawalotp",
  initialState: {
    withdrawalotp: null,
    authenticatingwithdrawalotp: false,
    authenticated: false,
    isError: false,
    errors: null
  },
  reducers: {
    clearState: (state) => {
      state.withdrawalotp = null;
      state.isError = false;
      state.authenticated = false;
      state.authenticatingwithdrawalotp = false;
      return state;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(WithdrawalOtp.fulfilled, (state, action) => {
      state.withdrawalotp = action.payload;
      state.authenticated = false;
      state.authenticatingwithdrawalotp = false;
      return state;
    });
    builder.addCase(WithdrawalOtp.pending, (state, action) => {
      state.authenticatingwithdrawalotp = true;
      state.authenticated = true;
    });
    builder.addCase(WithdrawalOtp.rejected, (state, action) => {
      state.errors = action.errors || action.payload;
      state.authenticated = false;
      state.authenticatingwithdrawalotp = false;
      state.isError = true;
      return state;
    });
  }
});

export const { clearState } = WithdrawalOtpSlice.actions;

export const WithdrawalOtpSelector = (state) => state.withdrawalotp;
