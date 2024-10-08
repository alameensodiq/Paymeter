import { createSlice } from '@reduxjs/toolkit';
import { Transactions } from '../Apis/Transactions';

export const TransactionSlice = createSlice({
  name: 'transactions',
  initialState: {
    transactions: null,
    authenticatingtransactions: false,
    authenticated: false,
    isError: false,
    errors: null,
  },
  reducers: {
    clearState: (state) => {
      state.transactions = null;
      state.isError = false;
      state.authenticated = false;
      state.authenticatingtransactions = false;
      return state;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(Transactions.fulfilled, (state, action) => {
      state.transactions = action.payload;
      state.authenticated = false;
      state.authenticatingtransactions = false;
      return state;
    });
    builder.addCase(Transactions.pending, (state, action) => {
        state.authenticatingtransactions = true;
        state.authenticated = true;
    });
    builder.addCase(Transactions.rejected, (state, action) => {
        state.errors = action.errors || action.payload;
        state.authenticated = false;
        state.authenticatingtransactions = false;
        state.isError = true;
        return state;
    });
  },
});

export const { clearState } = TransactionSlice.actions;

export const TransactionsSelector = (state) => state.transactions;
