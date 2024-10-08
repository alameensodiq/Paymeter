import { createSlice } from "@reduxjs/toolkit";
import { FundingApproval } from "../Apis/FundingApproval";

export const FundingApprovalSlice = createSlice({
  name: "fundingapproval",
  initialState: {
    fundingapproval: null,
    authenticatingfundingapproval: false,
    authenticated: false,
    isError: false,
    errors: null
  },
  reducers: {
    clearState: (state) => {
      state.fundingapproval = null;
      state.isError = false;
      state.authenticated = false;
      state.authenticatingfundingapproval = false;
      return state;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(FundingApproval.fulfilled, (state, action) => {
      state.fundingapproval = action.payload;
      state.authenticated = false;
      state.authenticatingapprove = false;
      return state;
    });
    builder.addCase(FundingApproval.pending, (state, action) => {
      state.authenticatingfundingapproval = true;
      state.authenticated = true;
    });
    builder.addCase(FundingApproval.rejected, (state, action) => {
      state.errors = action.errors || action.payload;
      state.authenticated = false;
      state.authenticatingfundingapproval = false;
      state.isError = true;
      return state;
    });
  }
});

export const { clearState } = FundingApprovalSlice.actions;

export const FundingApprovalSelector = (state) => state.fundingapproval;
