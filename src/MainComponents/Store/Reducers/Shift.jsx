import { createSlice } from "@reduxjs/toolkit";
import { Shift } from "../Apis/Shift";

export const ShiftSlice = createSlice({
  name: "shift",
  initialState: {
    shift: null,
    authenticatingshift: false,
    authenticated: false,
    isError: false,
    errors: null
  },
  reducers: {
    clearState: (state) => {
      state.shift = null;
      state.isError = false;
      state.authenticated = false;
      state.authenticatingshift = false;
      return state;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(Shift.fulfilled, (state, action) => {
      state.shift = action.payload;
      state.authenticated = false;
      state.authenticatingshift = false;
      return state;
    });
    builder.addCase(Shift.pending, (state, action) => {
      state.authenticatingshift = true;
      state.authenticated = true;
    });
    builder.addCase(Shift.rejected, (state, action) => {
      state.errors = action.errors || action.payload;
      state.authenticated = false;
      state.authenticatingshift = false;
      state.isError = true;
      return state;
    });
  }
});

export const { clearState } = ShiftSlice.actions;

export const ShiftSelector = (state) => state.shift;
