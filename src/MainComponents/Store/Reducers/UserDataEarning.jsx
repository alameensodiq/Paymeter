import { createSlice } from "@reduxjs/toolkit";
import { UserDataEarning } from "../Apis/UserDataEarning";

export const UserDataEarningSlice = createSlice({
  name: "userdataearning",
  initialState: {
    userdataearning: null,
    authenticatinguserdataearning: false,
    authenticated: false,
    isError: false,
    errors: null
  },
  reducers: {
    clearState: (state) => {
      state.userdataearning = null;
      state.isError = false;
      state.authenticated = false;
      state.authenticatinguserdataearning = false;
      return state;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(UserDataEarning.fulfilled, (state, action) => {
      state.userdataearning = action.payload;
      state.authenticated = false;
      state.authenticatinguserdataearning = false;
      return state;
    });
    builder.addCase(UserDataEarning.pending, (state, action) => {
      state.authenticatinguserdataearning = true;
      state.authenticated = true;
    });
    builder.addCase(UserDataEarning.rejected, (state, action) => {
      state.errors = action.errors || action.payload;
      state.authenticated = false;
      state.authenticatinguserdataearning = false;
      state.isError = true;
      return state;
    });
  }
});

export const { clearState } = UserDataEarningSlice.actions;

export const UserDataEarningSelector = (state) => state.userdataearning;
