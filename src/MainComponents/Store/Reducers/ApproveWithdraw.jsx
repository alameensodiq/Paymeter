import { createSlice } from "@reduxjs/toolkit";
import { ApproveWithdraw } from "../Apis/ApproveWithdraw";

export const ApproveWithdrawSlice = createSlice({
  name: "approvewithdraw",
  initialState: {
    approvewithdraw: null,
    authenticatingapprovewithdraw: false,
    authenticated: false,
    isError: false,
    errors: null
  },
  reducers: {
    clearState: (state) => {
      state.approvewithdraw = null;
      state.isError = false;
      state.authenticated = false;
      state.authenticatingapprovewithdraw = false;
      return state;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(ApproveWithdraw.fulfilled, (state, action) => {
      state.approvewithdraw = action.payload;
      state.authenticated = false;
      state.authenticatingapprovewithdraw = false;
      return state;
    });
    builder.addCase(ApproveWithdraw.pending, (state, action) => {
      state.authenticatingapprovewithdraw = true;
      state.authenticated = true;
    });
    builder.addCase(ApproveWithdraw.rejected, (state, action) => {
      state.errors = action.errors || action.payload;
      state.authenticated = false;
      state.authenticatingapprovewithdraw = false;
      state.isError = true;
      return state;
    });
  }
});

export const { clearState } = ApproveWithdrawSlice.actions;

export const ApproveWithdrawSelector = (state) => state.approvewithdraw;
