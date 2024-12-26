import { createSlice } from "@reduxjs/toolkit";
import { DashboardLastweek } from "../Apis/DashboardLastweek";

export const DashboardLastweekSlice = createSlice({
  name: "dashboardlastweek",
  initialState: {
    dashboardlastweek: null,
    authenticatingdashboardlastweek: false,
    authenticated: false,
    isError: false,
    errors: null
  },
  reducers: {
    clearState: (state) => {
      state.dashboardlastweek = null;
      state.isError = false;
      state.authenticated = false;
      state.authenticatingdashboardlastweek = false;
      return state;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(DashboardLastweek.fulfilled, (state, action) => {
      state.dashboardlastweek = action.payload;
      state.authenticated = false;
      state.authenticatingdashboardlastweek = false;
      return state;
    });
    builder.addCase(DashboardLastweek.pending, (state, action) => {
      state.authenticatingdashboardlastweek = true;
      state.authenticated = true;
    });
    builder.addCase(DashboardLastweek.rejected, (state, action) => {
      state.errors = action.errors || action.payload;
      state.authenticated = false;
      state.authenticatingdashboardlastweek = false;
      state.isError = true;
      return state;
    });
  }
});

export const { clearState } = DashboardLastweekSlice.actions;

export const DashboardLastweekSelector = (state) => state.dashboardlastweek;
