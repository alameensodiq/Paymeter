import { createSlice } from "@reduxjs/toolkit";
import { DashboardDailyMonthly } from "../Apis/DasboardDailyMonthly";

export const DashboardDailyMonthlySlice = createSlice({
  name: "dashboarddailymonthly",
  initialState: {
    dashboarddailymonthly: null,
    authenticatingdashboarddailymonthly: false,
    authenticated: false,
    isError: false,
    errors: null
  },
  reducers: {
    clearState: (state) => {
      state.dashboarddailymonthly = null;
      state.isError = false;
      state.authenticated = false;
      state.authenticatingdashboarddailymonthly = false;
      return state;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(DashboardDailyMonthly.fulfilled, (state, action) => {
      state.dashboarddailymonthly = action.payload;
      state.authenticated = false;
      state.authenticatingdashboarddailymonthly = false;
      return state;
    });
    builder.addCase(DashboardDailyMonthly.pending, (state, action) => {
      state.authenticatingdashboarddailymonthly = true;
      state.authenticated = true;
    });
    builder.addCase(DashboardDailyMonthly.rejected, (state, action) => {
      state.errors = action.errors || action.payload;
      state.authenticated = false;
      state.authenticatingdashboarddailymonthly = false;
      state.isError = true;
      return state;
    });
  }
});

export const { clearState } = DashboardDailyMonthlySlice.actions;

export const DashboardDailyMonthlySelector = (state) =>
  state.dashboarddailymonthly;
