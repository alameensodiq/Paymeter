import { createSlice } from "@reduxjs/toolkit";
import { Logins } from "../Apis/Login";

export const LoginSlice = createSlice({
  name: "login",
  initialState: {
    login: null,
    authenticating: false,
    authenticated: false,
    isError: false,
    errors: null
  },
  reducers: {
    clearState: (state) => {
      state.login = null;
      state.isError = false;
      state.authenticated = false;
      state.authenticating = false;
      return state;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(Logins.fulfilled, (state, action) => {
      state.login = action.payload;
      state.authenticated = false;
      state.authenticating = false;
      console.log(action.payload);
      return state;
    });
    builder.addCase(Logins.pending, (state, action) => {
      state.authenticating = true;
      state.authenticated = true;
    });
    builder.addCase(Logins.rejected, (state, action) => {
      state.errors = action.errors || action.payload;
      state.authenticated = false;
      state.authenticating = false;
      state.isError = true;
      return state;
    });
  }
});

export const { clearState } = LoginSlice.actions;

export const LoginSelector = (state) => state.login;
