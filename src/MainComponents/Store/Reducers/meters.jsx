import { createSlice } from "@reduxjs/toolkit";
import { meters } from "../Apis/meters";

export const metersSlice = createSlice({
  name: "meters",
  initialState: {
    meters: null,
    authenticatingmeters: false,
    authenticated: false,
    isError: false,
    errors: null
  },
  reducers: {
    clearState: (state) => {
      state.meters = null;
      state.isError = false;
      state.authenticated = false;
      state.authenticatingmeters = false;
      return state;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(meters.fulfilled, (state, action) => {
      state.meters = action.payload;
      state.authenticated = false;
      state.authenticatingmeters = false;
      return state;
    });
    builder.addCase(meters.pending, (state, action) => {
      state.authenticatingmeters = true;
      state.authenticated = true;
    });
    builder.addCase(meters.rejected, (state, action) => {
      state.errors = action.errors || action.payload;
      state.authenticated = false;
      state.authenticatingmeters = false;
      state.isError = true;
      return state;
    });
  }
});

export const { clearState } = metersSlice.actions;

export const metersSelector = (state) => state.meters;
