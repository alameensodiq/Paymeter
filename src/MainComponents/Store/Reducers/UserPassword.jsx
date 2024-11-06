import { createSlice } from "@reduxjs/toolkit";
import { UserPassword } from "../Apis/UserPassword";

export const UserPasswordSlice = createSlice({
  name: "passwordchange",
  initialState: {
    passwordchange: null,
    authenticatingpasswordchange: false,
    authenticated: false,
    isError: false,
    errors: null
  },
  reducers: {
    clearState: (state) => {
      state.passwordchange = null;
      state.isError = false;
      state.authenticated = false;
      state.authenticatingpasswordchange = false;
      return state;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(UserPassword.fulfilled, (state, action) => {
      state.passwordchange = action.payload;
      state.authenticated = false;
      state.authenticatingpasswordchange = false;
      return state;
    });
    builder.addCase(UserPassword.pending, (state, action) => {
      state.authenticatingpasswordchange = true;
      state.authenticated = true;
    });
    builder.addCase(UserPassword.rejected, (state, action) => {
      state.errors = action.errors || action.payload;
      state.authenticated = false;
      state.authenticatingpasswordchange = false;
      state.isError = true;
      return state;
    });
  }
});

export const { clearState } = UserPasswordSlice.actions;

export const UserPasswordSelector = (state) => state.passwordchange;
