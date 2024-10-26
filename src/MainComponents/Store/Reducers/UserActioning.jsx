import { createSlice } from "@reduxjs/toolkit";
import { UserActioning } from "../Apis/UserActioning";

export const UserActioningSlice = createSlice({
  name: "actioning",
  initialState: {
    actioning: null,
    authenticatingactioning: false,
    authenticated: false,
    isError: false,
    errors: null
  },
  reducers: {
    clearState: (state) => {
      state.actioning = null;
      state.isError = false;
      state.authenticated = false;
      state.authenticatingactioning = false;
      return state;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(UserActioning.fulfilled, (state, action) => {
      state.actioning = action.payload;
      state.authenticated = false;
      state.authenticatingactioning = false;
      return state;
    });
    builder.addCase(UserActioning.pending, (state, action) => {
      state.authenticatingactioning = true;
      state.authenticated = true;
    });
    builder.addCase(UserActioning.rejected, (state, action) => {
      state.errors = action.errors || action.payload;
      state.authenticated = false;
      state.authenticatingactioning = false;
      state.isError = true;
      return state;
    });
  }
});

export const { clearState } = UserActioningSlice.actions;

export const UserActioningSelector = (state) => state.actioning;
