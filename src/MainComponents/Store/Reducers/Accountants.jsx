import { createSlice } from "@reduxjs/toolkit";
import { Accountant } from "../Apis/Accountant";

export const AccountantSlice = createSlice({
  name: "accountants",
  initialState: {
    accountants: null,
    authenticatingaccountants: false,
    authenticated: false,
    isError: false,
    errors: null
  },
  reducers: {
    clearState: (state) => {
      state.accountants = null;
      state.isError = false;
      state.authenticated = false;
      state.authenticatingaccountants = false;
      return state;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(Accountant.fulfilled, (state, action) => {
      state.accountants = action.payload;
      state.authenticated = false;
      state.authenticatingaccountants = false;
      return state;
    });
    builder.addCase(Accountant.pending, (state, action) => {
      state.authenticatingaccountants = true;
      state.authenticated = true;
    });
    builder.addCase(Accountant.rejected, (state, action) => {
      state.errors = action.errors || action.payload;
      state.authenticated = false;
      state.authenticatingaccountants = false;
      state.isError = true;
      return state;
    });
  }
});

export const { clearState } = AccountantSlice.actions;

export const AccountantSelector = (state) => state.accountants;
