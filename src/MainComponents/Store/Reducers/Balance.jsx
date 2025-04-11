import { createSlice } from "@reduxjs/toolkit";
import { Balance } from "../Apis/Balance";

export const BalanceSlice = createSlice({
  name: "balance",
  initialState: {
    balance: null,
    authenticatingbalance: false,
    authenticated: false,
    isError: false,
    errors: null
  },
  reducers: {
    clearState: (state) => {
      state.balance = null;
      state.isError = false;
      state.authenticated = false;
      state.authenticatingbalance = false;
      return state;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(Balance.fulfilled, (state, action) => {
      state.balance = action.payload;
      state.authenticated = false;
      state.authenticatingbalance = false;
      return state;
    });
    builder.addCase(Balance.pending, (state, action) => {
      state.authenticatingbalance = true;
      state.authenticated = true;
    });
    builder.addCase(Balance.rejected, (state, action) => {
      state.errors = action.errors || action.payload;
      state.authenticated = false;
      state.authenticatingbalance = false;
      state.isError = true;
      return state;
    });
  }
});

export const { clearState } = BalanceSlice.actions;

export const BalanceSelector = (state) => state.balance;
