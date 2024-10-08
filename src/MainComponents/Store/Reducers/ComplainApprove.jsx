import { createSlice } from "@reduxjs/toolkit";
import { ComplainApprove } from "../Apis/ComplainApprove";

export const ComplainApproveSlice = createSlice({
  name: "complainapprove",
  initialState: {
    complainapprove: null,
    authenticatingcomplainapprove: false,
    authenticated: false,
    isError: false,
    errors: null
  },
  reducers: {
    clearState: (state) => {
      state.complainapprove = null;
      state.isError = false;
      state.authenticated = false;
      state.authenticatingcomplainapprove = false;
      return state;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(ComplainApprove.fulfilled, (state, action) => {
      state.complainapprove = action.payload;
      state.authenticated = false;
      state.authenticatingcomplainapprove = false;
      return state;
    });
    builder.addCase(ComplainApprove.pending, (state, action) => {
      state.authenticatingcomplainapprove = true;
      state.authenticated = true;
    });
    builder.addCase(ComplainApprove.rejected, (state, action) => {
      state.errors = action.errors || action.payload;
      state.authenticated = false;
      state.authenticatingcomplainapprove = false;
      state.isError = true;
      return state;
    });
  }
});

export const { clearState } = ComplainApproveSlice.actions;

export const ComplainApproveSelector = (state) => state.complainapprove;
