import { createSlice } from "@reduxjs/toolkit";
import { DashboardDiscoMonthlys } from "../Apis/DashboardDiscoMonthly";

export const DashboardDiscoMonthlySlice = createSlice({
  name: "dashboarddiscomonthly",
  initialState: {
    dashboarddiscomonthly: null,
    authenticatingdashboarddiscomonthly: false,
    authenticated: false,
    isError: false,
    errors: null
  },
  reducers: {
    clearState: (state) => {
      state.dashboarddiscomonthly = null;
      state.isError = false;
      state.authenticated = false;
      state.authenticatingdashboarddiscomonthly = false;
      return state;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(DashboardDiscoMonthlys.fulfilled, (state, action) => {
      state.dashboarddiscomonthly = action.payload;
      state.authenticated = false;
      state.authenticatingdashboarddiscomonthly = false;
      return state;
    });
    builder.addCase(DashboardDiscoMonthlys.pending, (state, action) => {
      state.authenticatingdashboarddiscomonthly = true;
      state.authenticated = true;
    });
    builder.addCase(DashboardDiscoMonthlys.rejected, (state, action) => {
      state.errors = action.errors || action.payload;
      state.authenticated = false;
      state.authenticatingdashboarddiscomonthly = false;
      state.isError = true;
      return state;
    });
  }
});

export const { clearState } = DashboardDiscoMonthlySlice.actions;

export const DashboardDiscoMonthlySelector = (state) =>
  state.dashboarddiscomonthly;
