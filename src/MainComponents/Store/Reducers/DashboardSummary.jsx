import { createSlice } from "@reduxjs/toolkit";
import { DashboardSummary } from "../Apis/DashboardSummary";

export const DashboardSummarySlice = createSlice({
  name: "dashboardsummary",
  initialState: {
    dashboardsummary: null,
    authenticatingdashboardsummary: false,
    authenticated: false,
    isError: false,
    errors: null
  },
  reducers: {
    clearState: (state) => {
      state.dashboardsummary = null;
      state.isError = false;
      state.authenticated = false;
      state.authenticatingdashboardsummary = false;
      return state;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(DashboardSummary.fulfilled, (state, action) => {
      state.dashboardsummary = action.payload;
      state.authenticated = false;
      state.authenticatingdashboardsummary = false;
      return state;
    });
    builder.addCase(DashboardSummary.pending, (state, action) => {
      state.authenticatingdashboardsummary = true;
      state.authenticated = true;
    });
    builder.addCase(DashboardSummary.rejected, (state, action) => {
      state.errors = action.errors || action.payload;
      state.authenticated = false;
      state.authenticatingdashboardsummary = false;
      state.isError = true;
      return state;
    });
  }
});

export const { clearState } = DashboardSummarySlice.actions;

export const DashboardSummarySelector = (state) => state.dashboardsummary;
