import { createSlice } from "@reduxjs/toolkit";
import { Withdrawing } from "../Apis/Withdrawing";

export const WithdrawingSlice = createSlice({
  name: "withdrawing",
  initialState: {
    withdrawing: null,
    authenticatingwithdrawing: false,
    authenticated: false,
    isError: false,
    errors: null
  },
  reducers: {
    clearState: (state) => {
      state.withdrawing = null;
      state.isError = false;
      state.authenticated = false;
      state.authenticatingwithdrawing = false;
      return state;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(Withdrawing.fulfilled, (state, action) => {
      state.withdrawing = action.payload;
      state.authenticated = false;
      state.authenticatingwithdrawing = false;
      return state;
    });
    builder.addCase(Withdrawing.pending, (state, action) => {
      state.authenticatingwithdrawing = true;
      state.authenticated = true;
    });
    builder.addCase(Withdrawing.rejected, (state, action) => {
      state.errors = action.errors || action.payload;
      state.authenticated = false;
      state.authenticatingwithdrawing = false;
      state.isError = true;
      return state;
    });
  }
});

export const { clearState } = WithdrawingSlice.actions;

export const WithdrawingSelector = (state) => state.withdrawing;
