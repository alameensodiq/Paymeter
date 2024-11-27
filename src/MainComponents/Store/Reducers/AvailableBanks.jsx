import { createSlice } from "@reduxjs/toolkit";
import { AvailableBanks } from "../Apis/AvailableBanks";

export const AvailableBanksSlice = createSlice({
  name: "availablebanks",
  initialState: {
    availablebanks: null,
    authenticatingavailablebanks: false,
    authenticated: false,
    isError: false,
    errors: null
  },
  reducers: {
    clearState: (state) => {
      state.availablebanks = null;
      state.isError = false;
      state.authenticated = false;
      state.authenticatingavailablebanks = false;
      return state;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(AvailableBanks.fulfilled, (state, action) => {
      state.availablebanks = action.payload;
      state.authenticated = false;
      state.authenticatingavailablebanks = false;
      return state;
    });
    builder.addCase(AvailableBanks.pending, (state, action) => {
      state.authenticatingavailablebanks = true;
      state.authenticated = true;
    });
    builder.addCase(AvailableBanks.rejected, (state, action) => {
      state.errors = action.errors || action.payload;
      state.authenticated = false;
      state.authenticatingavailablebanks = false;
      state.isError = true;
      return state;
    });
  }
});

export const { clearState } = AvailableBanksSlice.actions;

export const AvailableBanksSelector = (state) => state.availablebanks;
