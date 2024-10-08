import { createSlice } from "@reduxjs/toolkit";
import { Complain } from "../Apis/Complain";

export const ComplainSlice = createSlice({
  name: "complain",
  initialState: {
    complain: null,
    authenticatingcomplain: false,
    authenticated: false,
    isError: false,
    errors: null
  },
  reducers: {
    clearState: (state) => {
      state.complain = null;
      state.isError = false;
      state.authenticated = false;
      state.authenticatingcomplain = false;
      return state;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(Complain.fulfilled, (state, action) => {
      state.complain = action.payload;
      state.authenticated = false;
      state.authenticatingcomplain = false;
      return state;
    });
    builder.addCase(Complain.pending, (state, action) => {
      state.authenticatingcomplain = true;
      state.authenticated = true;
    });
    builder.addCase(Complain.rejected, (state, action) => {
      state.errors = action.errors || action.payload;
      state.authenticated = false;
      state.authenticatingcomplain = false;
      state.isError = true;
      return state;
    });
  }
});

export const { clearState } = ComplainSlice.actions;

export const ComplainSelector = (state) => state.complain;
