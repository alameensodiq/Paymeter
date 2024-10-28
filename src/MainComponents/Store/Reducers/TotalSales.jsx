import { createSlice } from "@reduxjs/toolkit";
import { TotalSales } from "../Apis/TotalSales";

export const TotalSalesSlice = createSlice({
  name: "totalsales",
  initialState: {
    totalsales: null,
    authenticatingtotalsales: false,
    authenticated: false,
    isError: false,
    errors: null
  },
  reducers: {
    clearState: (state) => {
      state.totalsales = null;
      state.isError = false;
      state.authenticated = false;
      state.authenticatingtotalsales = false;
      return state;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(TotalSales.fulfilled, (state, action) => {
      state.totalsales = action.payload;
      state.authenticated = false;
      state.authenticatingtotalsales = false;
      return state;
    });
    builder.addCase(TotalSales.pending, (state, action) => {
      state.authenticatingtotalsales = true;
      state.authenticated = true;
    });
    builder.addCase(TotalSales.rejected, (state, action) => {
      state.errors = action.errors || action.payload;
      state.authenticated = false;
      state.authenticatingtotalsales = false;
      state.isError = true;
      return state;
    });
  }
});

export const { clearState } = TotalSalesSlice.actions;

export const TotalSalesSelector = (state) => state.totalsales;
