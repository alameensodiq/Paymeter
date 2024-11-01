import { createSlice } from "@reduxjs/toolkit";
import { BankAccount } from "../Apis/BankAccounts";

export const BankAccountsSlice = createSlice({
  name: "bankaccounts",
  initialState: {
    bankaccounts: null,
    authenticatingbankaccounts: false,
    authenticated: false,
    isError: false,
    errors: null
  },
  reducers: {
    clearState: (state) => {
      state.bankaccounts = null;
      state.isError = false;
      state.authenticated = false;
      state.authenticatingbankaccounts = false;
      return state;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(BankAccount.fulfilled, (state, action) => {
      state.bankaccounts = action.payload;
      state.authenticated = false;
      state.authenticatingbankaccounts = false;
      return state;
    });
    builder.addCase(BankAccount.pending, (state, action) => {
      state.authenticatingbankaccounts = true;
      state.authenticated = true;
    });
    builder.addCase(BankAccount.rejected, (state, action) => {
      state.errors = action.errors || action.payload;
      state.authenticated = false;
      state.authenticatingbankaccounts = false;
      state.isError = true;
      return state;
    });
  }
});

export const { clearState } = BankAccountsSlice.actions;

export const BankAccountsSelector = (state) => state.bankaccounts;
