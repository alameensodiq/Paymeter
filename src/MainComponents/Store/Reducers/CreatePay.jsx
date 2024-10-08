import { createSlice } from "@reduxjs/toolkit";
import { CreatePay } from "../Apis/CreatePay";

export const CreatePaySlice = createSlice({
  name: "createpay",
  initialState: {
    createpay: null,
    authenticatingcreatepay: false,
    authenticated: false,
    isError: false,
    errors: null
  },
  reducers: {
    clearState: (state) => {
      state.createpay = null;
      state.isError = false;
      state.authenticated = false;
      state.authenticatingcreatepay = false;
      return state;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(CreatePay.fulfilled, (state, action) => {
      state.createpay = action.payload;
      state.authenticated = false;
      state.authenticatingcreatepay = false;
      return state;
    });
    builder.addCase(CreatePay.pending, (state, action) => {
      state.authenticatingcreatepay = true;
      state.authenticated = true;
    });
    builder.addCase(CreatePay.rejected, (state, action) => {
      state.errors = action.errors || action.payload;
      state.authenticated = false;
      state.authenticatingcreatepay = false;
      state.isError = true;
      return state;
    });
  }
});

export const { clearState } = CreatePaySlice.actions;

export const CreatePaySelector = (state) => state.createpay;
