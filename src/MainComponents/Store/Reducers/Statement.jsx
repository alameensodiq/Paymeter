import { createSlice } from "@reduxjs/toolkit";
import { Statement } from "../Apis/Statement";

export const StatementSlice = createSlice({
  name: "statement",
  initialState: {
    statement: null,
    authenticatingstatement: false,
    authenticated: false,
    isError: false,
    errors: null
  },
  reducers: {
    clearState: (state) => {
      state.statement = null;
      state.isError = false;
      state.authenticated = false;
      state.authenticatingstatement = false;
      return state;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(Statement.fulfilled, (state, action) => {
      state.statement = action.payload;
      state.authenticated = false;
      state.authenticatingstatement = false;
      return state;
    });
    builder.addCase(Statement.pending, (state, action) => {
      state.authenticatingstatement = true;
      state.authenticated = true;
    });
    builder.addCase(Statement.rejected, (state, action) => {
      state.errors = action.errors || action.payload;
      state.authenticated = false;
      state.authenticatingstatement = false;
      state.isError = true;
      return state;
    });
  }
});

export const { clearState } = StatementSlice.actions;

export const StatementSelector = (state) => state.statement;
