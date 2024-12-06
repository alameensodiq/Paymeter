import { createSlice } from "@reduxjs/toolkit";
import { SystemCare } from "../Apis/SystemCare";

export const SystemCareSlice = createSlice({
  name: "systemcares",
  initialState: {
    systemcares: null,
    authenticatingsystemcares: false,
    authenticated: false,
    isError: false,
    errors: null
  },
  reducers: {
    clearState: (state) => {
      state.systemcares = null;
      state.isError = false;
      state.authenticated = false;
      state.authenticatingsystemcares = false;
      return state;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(SystemCare.fulfilled, (state, action) => {
      state.systemcares = action.payload;
      state.authenticated = false;
      state.authenticatingsystemcares = false;
      return state;
    });
    builder.addCase(SystemCare.pending, (state, action) => {
      state.authenticatingsystemcares = true;
      state.authenticated = true;
    });
    builder.addCase(SystemCare.rejected, (state, action) => {
      state.errors = action.errors || action.payload;
      state.authenticated = false;
      state.authenticatingsystemcares = false;
      state.isError = true;
      return state;
    });
  }
});

export const { clearState } = SystemCareSlice.actions;

export const SystemCareSelector = (state) => state.systemcares;
