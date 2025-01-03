import { createSlice } from "@reduxjs/toolkit";
import { Initiate } from "../Apis/Initiate";

export const InitiateSlice = createSlice({
  name: "initiate",
  initialState: {
    initiate: null,
    authenticatinginitiate: false,
    authenticated: false,
    isError: false,
    errors: null
  },
  reducers: {
    clearState: (state) => {
      state.initiate = null;
      state.isError = false;
      state.authenticated = false;
      state.authenticatinginitiate = false;
      return state;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(Initiate.fulfilled, (state, action) => {
      state.initiate = action.payload;
      state.authenticated = false;
      state.authenticatinginitiate = false;
      return state;
    });
    builder.addCase(Initiate.pending, (state, action) => {
      state.authenticatinginitiate = true;
      state.authenticated = true;
    });
    builder.addCase(Initiate.rejected, (state, action) => {
      state.errors = action.errors || action.payload;
      state.authenticated = false;
      state.authenticatinginitiate = false;
      state.isError = true;
      return state;
    });
  }
});

export const { clearState } = InitiateSlice.actions;

export const InitiateSelector = (state) => state.initiate;
