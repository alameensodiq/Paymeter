import { createSlice } from "@reduxjs/toolkit";
import { BankTransaction } from "../Apis/BankTransaction";

export const BankTransactionSlice = createSlice({
  name: "banktransactions",
  initialState: {
    banktransactions: null,
    authenticatingbanktransactions: false,
    authenticated: false,
    isError: false,
    errors: null
  },
  reducers: {
    clearState: (state) => {
      state.banktransactions = null;
      state.isError = false;
      state.authenticated = false;
      state.authenticatingbanktransactions = false;
      return state;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(BankTransaction.fulfilled, (state, action) => {
      state.banktransactions = action.payload;
      state.authenticated = false;
      state.authenticatingbanktransactions = false;
      return state;
    });
    builder.addCase(BankTransaction.pending, (state, action) => {
      state.authenticatingbanktransactions = true;
      state.authenticated = true;
    });
    builder.addCase(BankTransaction.rejected, (state, action) => {
      state.errors = action.errors || action.payload;
      state.authenticated = false;
      state.authenticatingbanktransactions = false;
      state.isError = true;
      return state;
    });
  }
});

export const { clearState } = BankTransactionSlice.actions;

export const BankTransactionSelector = (state) => state.banktransactions;
