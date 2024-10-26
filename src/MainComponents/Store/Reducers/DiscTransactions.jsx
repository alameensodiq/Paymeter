import { createSlice } from "@reduxjs/toolkit";
import { DiscTransactions } from "../Apis/DiscTransactions";

export const DiscTransactionsSlice = createSlice({
  name: "disctransactions",
  initialState: {
    disctransactions: null,
    authenticatingdisctransactions: false,
    authenticated: false,
    isError: false,
    errors: null
  },
  reducers: {
    clearState: (state) => {
      state.disctransactions = null;
      state.isError = false;
      state.authenticated = false;
      state.authenticatingdisctransactions = false;
      return state;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(DiscTransactions.fulfilled, (state, action) => {
      state.disctransactions = action.payload;
      state.authenticated = false;
      state.authenticatingdisctransactions = false;
      return state;
    });
    builder.addCase(DiscTransactions.pending, (state, action) => {
      state.authenticatingdisctransactions = true;
      state.authenticated = true;
    });
    builder.addCase(DiscTransactions.rejected, (state, action) => {
      state.errors = action.errors || action.payload;
      state.authenticated = false;
      state.authenticatingdisctransactions = false;
      state.isError = true;
      return state;
    });
  }
});

export const { clearState } = DiscTransactionsSlice.actions;

export const DiscTransactionsSelector = (state) => state.disctransactions;
