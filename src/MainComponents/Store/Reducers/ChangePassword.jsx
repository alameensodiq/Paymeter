import { createSlice } from "@reduxjs/toolkit";
import { ChangePasswords } from "../Apis/Change";

export const ChangePasswordsSlice = createSlice({
  name: "changepassword",
  initialState: {
    changepassword: null,
    authenticatingchangepassword: false,
    authenticated: false,
    isError: false,
    errors: null
  },
  reducers: {
    clearState: (state) => {
      state.changepassword = null;
      state.isError = false;
      state.authenticated = false;
      state.authenticatingchangepassword = false;
      return state;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(ChangePasswords.fulfilled, (state, action) => {
      state.changepassword = action.payload;
      state.authenticated = false;
      state.authenticatingchangepassword = false;
      return state;
    });
    builder.addCase(ChangePasswords.pending, (state, action) => {
      state.authenticatingchangepassword = true;
      state.authenticated = true;
    });
    builder.addCase(ChangePasswords.rejected, (state, action) => {
      state.errors = action.errors || action.payload;
      state.authenticated = false;
      state.authenticatingchangepassword = false;
      state.isError = true;
      return state;
    });
  }
});

export const { clearState } = ChangePasswordsSlice.actions;

export const ChangePasswordsSelector = (state) => state.changepassword;
