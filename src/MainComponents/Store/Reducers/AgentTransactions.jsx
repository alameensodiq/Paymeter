import { createSlice } from "@reduxjs/toolkit";
import { AgentTransactions } from "../Apis/AgentTransactions";

export const AgentTransactionsSlice = createSlice({
  name: "agenttransactions",
  initialState: {
    agenttransactions: null,
    authenticatingagenttransactions: false,
    authenticated: false,
    isError: false,
    errors: null
  },
  reducers: {
    clearState: (state) => {
      state.agenttransactions = null;
      state.isError = false;
      state.authenticated = false;
      state.authenticatingagenttransactions = false;
      return state;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(AgentTransactions.fulfilled, (state, action) => {
      state.agenttransactions = action.payload;
      state.authenticated = false;
      state.authenticatingagenttransactions = false;
      return state;
    });
    builder.addCase(AgentTransactions.pending, (state, action) => {
      state.authenticatingagenttransactions = true;
      state.authenticated = true;
    });
    builder.addCase(AgentTransactions.rejected, (state, action) => {
      state.errors = action.errors || action.payload;
      state.authenticated = false;
      state.authenticatingagenttransactions = false;
      state.isError = true;
      return state;
    });
  }
});

export const { clearState } = AgentTransactionsSlice.actions;

export const AgentTransactionsSelector = (state) => state.agenttransactions;
