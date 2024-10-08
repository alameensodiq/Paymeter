import { createSlice } from "@reduxjs/toolkit";
import { Banks } from "../Apis/Banks";

export const BanksSlice = createSlice({
  name: "banks",
  initialState: {
    banks: null,
    authenticatingbanks: false,
    authenticated: false,
    isError: false,
    errors: null
  },
  reducers: {
    clearState: (state) => {
      state.banks = null;
      state.isError = false;
      state.authenticated = false;
      state.authenticatingbanks = false;
      return state;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(Banks.fulfilled, (state, action) => {
      state.banks = action.payload;
      state.authenticated = false;
      state.authenticatingbanks = false;
      return state;
    });
    builder.addCase(Banks.pending, (state, action) => {
      state.authenticatingbanks = true;
      state.authenticated = true;
    });
    builder.addCase(Banks.rejected, (state, action) => {
      state.errors = action.errors || action.payload;
      state.authenticated = false;
      state.authenticatingbanks = false;
      state.isError = true;
      return state;
    });
  }
});

export const { clearState } = BanksSlice.actions;

export const BanksSelector = (state) => state.banks;
