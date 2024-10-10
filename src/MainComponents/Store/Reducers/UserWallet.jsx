import { createSlice } from "@reduxjs/toolkit";
import { UserWallet } from "../Apis/UserWallet";

export const UserWalletSlice = createSlice({
  name: "userwallet",
  initialState: {
    userwallet: null,
    authenticatinguserwallet: false,
    authenticated: false,
    isError: false,
    errors: null
  },
  reducers: {
    clearState: (state) => {
      state.userwallet = null;
      state.isError = false;
      state.authenticated = false;
      state.authenticatinguserwallet = false;
      return state;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(UserWallet.fulfilled, (state, action) => {
      state.userwallet = action.payload;
      state.authenticated = false;
      state.authenticatinguserwallet = false;
      return state;
    });
    builder.addCase(UserWallet.pending, (state, action) => {
      state.authenticatinguserwallet = true;
      state.authenticated = true;
    });
    builder.addCase(UserWallet.rejected, (state, action) => {
      state.errors = action.errors || action.payload;
      state.authenticated = false;
      state.authenticatinguserwallet = false;
      state.isError = true;
      return state;
    });
  }
});

export const { clearState } = UserWalletSlice.actions;

export const UserWalletSelector = (state) => state.userwallet;
