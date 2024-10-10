import { createSlice } from "@reduxjs/toolkit";
import { DashboardYearly } from "../Apis/DashboardYearly";

export const DashboardYearlySlice = createSlice({
  name: "dashboard",
  initialState: {
    dashboardyearly: null,
    authenticatingdashboardyearly: false,
    authenticated: false,
    isError: false,
    errors: null
  },
  reducers: {
    clearState: (state) => {
      state.dashboardyearly = null;
      state.isError = false;
      state.authenticated = false;
      state.authenticatingdashboardyearly = false;
      return state;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(DashboardYearly.fulfilled, (state, action) => {
      state.dashboardyearly = action.payload;
      state.authenticated = false;
      state.authenticatingdashboardyearly = false;
      return state;
    });
    builder.addCase(DashboardYearly.pending, (state, action) => {
      state.authenticatingdashboardyearly = true;
      state.authenticated = true;
    });
    builder.addCase(DashboardYearly.rejected, (state, action) => {
      state.errors = action.errors || action.payload;
      state.authenticated = false;
      state.authenticatingdashboardyearly = false;
      state.isError = true;
      return state;
    });
  }
});

export const { clearState } = DashboardYearlySlice.actions;

export const DashboardYearlySelector = (state) => state.dashboardyearly;
