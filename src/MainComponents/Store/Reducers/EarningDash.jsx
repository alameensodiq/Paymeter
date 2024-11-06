import { createSlice } from "@reduxjs/toolkit";
import { EarningDash } from "../Apis/EarningDash";

export const EarningDashSlice = createSlice({
  name: "earningdash",
  initialState: {
    earningdash: null,
    authenticatingearningdash: false,
    authenticated: false,
    isError: false,
    errors: null
  },
  reducers: {
    clearState: (state) => {
      state.earningdash = null;
      state.isError = false;
      state.authenticated = false;
      state.authenticatingearningdash = false;
      return state;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(EarningDash.fulfilled, (state, action) => {
      state.earningdash = action.payload;
      state.authenticated = false;
      state.authenticatingearningdash = false;
      return state;
    });
    builder.addCase(EarningDash.pending, (state, action) => {
      state.authenticatingearningdash = true;
      state.authenticated = true;
    });
    builder.addCase(EarningDash.rejected, (state, action) => {
      state.errors = action.errors || action.payload;
      state.authenticated = false;
      state.authenticatingearningdash = false;
      state.isError = true;
      return state;
    });
  }
});

export const { clearState } = EarningDashSlice.actions;

export const EarningDashSelector = (state) => state.earningdash;
