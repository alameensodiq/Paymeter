import { createSlice } from "@reduxjs/toolkit";
import { AddBank } from "../Apis/AddBank";

export const AddBankSlice = createSlice({
  name: "addbanks",
  initialState: {
    addbanks: null,
    authenticatingaddbanks: false,
    authenticated: false,
    isError: false,
    errors: null
  },
  reducers: {
    clearState: (state) => {
      state.addbanks = null;
      state.isError = false;
      state.authenticated = false;
      state.authenticatingaddbanks = false;
      return state;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(AddBank.fulfilled, (state, action) => {
      state.addbanks = action.payload;
      state.authenticated = false;
      state.authenticatingaddbanks = false;
      return state;
    });
    builder.addCase(AddBank.pending, (state, action) => {
      state.authenticatingaddbanks = true;
      state.authenticated = true;
    });
    builder.addCase(AddBank.rejected, (state, action) => {
      state.errors = action.errors || action.payload;
      state.authenticated = false;
      state.authenticatingaddbanks = false;
      state.isError = true;
      return state;
    });
  }
});

export const { clearState } = AddBankSlice.actions;

export const AddBankSelector = (state) => state.addbanks;
