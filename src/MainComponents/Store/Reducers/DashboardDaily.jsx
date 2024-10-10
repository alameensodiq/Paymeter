import { createSlice } from "@reduxjs/toolkit";
import { DashboardDaily } from "../Apis/DashboardDaily";

export const DashboardDailySlice = createSlice({
  name: "dashboarddaily",
  initialState: {
    dashboarddaily: null,
    authenticatingdashboarddaily: false,
    authenticated: false,
    isError: false,
    errors: null
  },
  reducers: {
    clearState: (state) => {
      state.dashboarddaily = null;
      state.isError = false;
      state.authenticated = false;
      state.authenticatingdashboarddaily = false;
      return state;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(DashboardDaily.fulfilled, (state, action) => {
      state.dashboarddaily = action.payload;
      state.authenticated = false;
      state.authenticatingdashboarddaily = false;
      return state;
    });
    builder.addCase(DashboardDaily.pending, (state, action) => {
      state.authenticatingdashboarddaily = true;
      state.authenticated = true;
    });
    builder.addCase(DashboardDaily.rejected, (state, action) => {
      state.errors = action.errors || action.payload;
      state.authenticated = false;
      state.authenticatingdashboarddaily = false;
      state.isError = true;
      return state;
    });
  }
});

export const { clearState } = DashboardDailySlice.actions;

export const DashboardDailySelector = (state) => state.dashboarddaily;
