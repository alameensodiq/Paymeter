import { createSlice } from "@reduxjs/toolkit";
import { UserTransaction } from "../Apis/UserTransaction";

export const UserTransactionSlice = createSlice({
  name: "usertransaction",
  initialState: {
    usertransaction: null,
    authenticatingusertransaction: false,
    authenticated: false,
    isError: false,
    errors: null
  },
  reducers: {
    clearState: (state) => {
      state.usertransaction = null;
      state.isError = false;
      state.authenticated = false;
      state.authenticatingusertransaction = false;
      return state;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(UserTransaction.fulfilled, (state, action) => {
      state.usertransaction = action.payload;
      state.authenticated = false;
      state.authenticatingusertransaction = false;
      return state;
    });
    builder.addCase(UserTransaction.pending, (state, action) => {
      state.authenticatingusertransaction = true;
      state.authenticated = true;
    });
    builder.addCase(UserTransaction.rejected, (state, action) => {
      state.errors = action.errors || action.payload;
      state.authenticated = false;
      state.authenticatingusertransaction = false;
      state.isError = true;
      return state;
    });
  }
});

export const { clearState } = UserTransactionSlice.actions;

export const UserTransactionSelector = (state) => state.usertransaction;
