import { createSlice } from "@reduxjs/toolkit";
import { UserMeters } from "../Apis/UserMeters";

export const UserMetersSlice = createSlice({
  name: "usermeters",
  initialState: {
    usermeters: null,
    authenticatingusermeters: false,
    authenticated: false,
    isError: false,
    errors: null
  },
  reducers: {
    clearState: (state) => {
      state.usermeters = null;
      state.isError = false;
      state.authenticated = false;
      state.authenticatingusermeters = false;
      return state;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(UserMeters.fulfilled, (state, action) => {
      state.usermeters = action.payload;
      state.authenticated = false;
      state.authenticatingusermeters = false;
      return state;
    });
    builder.addCase(UserMeters.pending, (state, action) => {
      state.authenticatingusermeters = true;
      state.authenticated = true;
    });
    builder.addCase(UserMeters.rejected, (state, action) => {
      state.errors = action.errors || action.payload;
      state.authenticated = false;
      state.authenticatingusermeters = false;
      state.isError = true;
      return state;
    });
  }
});

export const { clearState } = UserMetersSlice.actions;

export const UserMetersSelector = (state) => state.usermeters;
