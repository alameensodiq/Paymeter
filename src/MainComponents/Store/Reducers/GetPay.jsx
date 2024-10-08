import { createSlice } from "@reduxjs/toolkit";
import { GetPay } from "../Apis/GetPay";

export const GetPaySlice = createSlice({
  name: "paymentmethod",
  initialState: {
    paymentmethod: null,
    authenticatingpaymentmethod: false,
    authenticated: false,
    isError: false,
    errors: null
  },
  reducers: {
    clearState: (state) => {
      state.paymentmethod = null;
      state.isError = false;
      state.authenticated = false;
      state.authenticatingpaymentmethod = false;
      return state;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(GetPay.fulfilled, (state, action) => {
      state.paymentmethod = action.payload;
      state.authenticated = false;
      state.authenticatingpaymentmethod = false;
      return state;
    });
    builder.addCase(GetPay.pending, (state, action) => {
      state.authenticatingpaymentmethod = true;
      state.authenticated = true;
    });
    builder.addCase(GetPay.rejected, (state, action) => {
      state.errors = action.errors || action.payload;
      state.authenticated = false;
      state.authenticatingpaymentmethod = false;
      state.isError = true;
      return state;
    });
  }
});

export const { clearState } = GetPaySlice.actions;

export const GetPaySliceSelector = (state) => state.paymentmethod;
