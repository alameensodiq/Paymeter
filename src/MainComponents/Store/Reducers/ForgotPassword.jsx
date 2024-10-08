import { createSlice } from "@reduxjs/toolkit";
import { Forgot } from "../Apis/ForgotPassword";

export const ForgotSlice = createSlice({
  name: "forgot",
  initialState: {
    forgot: null,
    authenticatingforgot: false,
    authenticated: false,
    isError: false,
    errors: null
  },
  reducers: {
    clearState: (state) => {
      state.forgot = null;
      state.isError = false;
      state.authenticated = false;
      state.authenticatingforgot = false;
      return state;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(Forgot.fulfilled, (state, action) => {
      state.forgot = action.payload;
      state.authenticated = false;
      state.authenticatingforgot = false;
      return state;
    });
    builder.addCase(Forgot.pending, (state, action) => {
      state.authenticatingforgot = true;
      state.authenticated = true;
    });
    builder.addCase(Forgot.rejected, (state, action) => {
      state.errors = action.errors || action.payload;
      state.authenticated = false;
      state.authenticatingforgot = false;
      state.isError = true;
      return state;
    });
  }
});

export const { clearState } = ForgotSlice.actions;

export const ForgotSelector = (state) => state.forgot;
