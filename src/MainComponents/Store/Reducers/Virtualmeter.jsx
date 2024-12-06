import { createSlice } from "@reduxjs/toolkit";
import { Virtualmeter } from "../Apis/Virtualmeter";

export const VirtualmeterSlice = createSlice({
  name: "virtual",
  initialState: {
    virtual: null,
    authenticatingvirtual: false,
    authenticated: false,
    isError: false,
    errors: null
  },
  reducers: {
    clearState: (state) => {
      state.virtual = null;
      state.isError = false;
      state.authenticated = false;
      state.authenticatingvirtual = false;
      return state;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(Virtualmeter.fulfilled, (state, action) => {
      state.virtual = action.payload;
      state.authenticated = false;
      state.authenticatingvirtual = false;
      return state;
    });
    builder.addCase(Virtualmeter.pending, (state, action) => {
      state.authenticatingvirtual = true;
      state.authenticated = true;
    });
    builder.addCase(Virtualmeter.rejected, (state, action) => {
      state.errors = action.errors || action.payload;
      state.authenticated = false;
      state.authenticatingvirtual = false;
      state.isError = true;
      return state;
    });
  }
});

export const { clearState } = VirtualmeterSlice.actions;

export const VirtualmeterSelector = (state) => state.virtual;
