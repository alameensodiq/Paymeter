import { createSlice } from "@reduxjs/toolkit";
import { Withdrawal } from "../Apis/Withdrawal";

export const WithdrawalSlice = createSlice({
  name: "withdrawal",
  initialState: {
    withdrawal: null,
    authenticatingwithdrawal: false,
    authenticated: false,
    isError: false,
    errors: null
  },
  reducers: {
    clearState: (state) => {
      state.withdrawal = null;
      state.isError = false;
      state.authenticated = false;
      state.authenticatingwithdrawal = false;
      return state;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(Withdrawal.fulfilled, (state, action) => {
      state.withdrawal = action.payload;
      state.authenticated = false;
      state.authenticatingwithdrawal = false;
      return state;
    });
    builder.addCase(Withdrawal.pending, (state, action) => {
      state.authenticatingwithdrawal = true;
      state.authenticated = true;
    });
    builder.addCase(Withdrawal.rejected, (state, action) => {
      state.errors = action.errors || action.payload;
      state.authenticated = false;
      state.authenticatingwithdrawal = false;
      state.isError = true;
      return state;
    });
  }
});

export const { clearState } = WithdrawalSlice.actions;

export const WithdrawalSelector = (state) => state.withdrawal;
