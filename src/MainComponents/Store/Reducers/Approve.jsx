import { createSlice } from "@reduxjs/toolkit";
import { Approve } from "../Apis/Approve";

export const ApproveSlice = createSlice({
  name: "approve",
  initialState: {
    approve: null,
    authenticatingapprove: false,
    authenticated: false,
    isError: false,
    errors: null
  },
  reducers: {
    clearState: (state) => {
      state.approve = null;
      state.isError = false;
      state.authenticated = false;
      state.authenticatingapprove = false;
      return state;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(Approve.fulfilled, (state, action) => {
      state.approve = action.payload;
      state.authenticated = false;
      state.authenticatingapprove = false;
      return state;
    });
    builder.addCase(Approve.pending, (state, action) => {
      state.authenticatingapprove = true;
      state.authenticated = true;
    });
    builder.addCase(Approve.rejected, (state, action) => {
      state.errors = action.errors || action.payload;
      state.authenticated = false;
      state.authenticatingapprove = false;
      state.isError = true;
      return state;
    });
  }
});

export const { clearState } = ApproveSlice.actions;

export const ApproveSelector = (state) => state.approve;
