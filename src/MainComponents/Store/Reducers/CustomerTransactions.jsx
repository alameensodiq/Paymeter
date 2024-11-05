import { createSlice } from "@reduxjs/toolkit";
import { Transactions } from "../Apis/Transactions";

export const CustomerTransactionSlice = createSlice({
  name: "customertransactions",
  initialState: {
    customertransactions: null,
    authenticatingcustomertransactions: false,
    authenticated: false,
    isError: false,
    errors: null
  },
  reducers: {
    clearState: (state) => {
      state.customertransactions = null;
      state.isError = false;
      state.authenticated = false;
      state.authenticatingcustomertransactions = false;
      return state;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(Transactions.fulfilled, (state, action) => {
      state.customertransactions = action.payload;
      state.authenticated = false;
      state.authenticatingcustomertransactions = false;
      return state;
    });
    builder.addCase(Transactions.pending, (state, action) => {
      state.authenticatingcustomertransactions = true;
      state.authenticated = true;
    });
    builder.addCase(Transactions.rejected, (state, action) => {
      state.errors = action.errors || action.payload;
      state.authenticated = false;
      state.authenticatingcustomertransactions = false;
      state.isError = true;
      return state;
    });
  }
});

export const { clearState } = CustomerTransactionSlice.actions;

export const CustomerTransactionsSelector = (state) =>
  state.customertransactions;
