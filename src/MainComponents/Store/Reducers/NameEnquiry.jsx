import { createSlice } from "@reduxjs/toolkit";
import { NameEnquiry } from "../Apis/NameEnquiry";

export const NameEnquirySlice = createSlice({
  name: "nameenquiry",
  initialState: {
    nameenquiry: null,
    authenticatingnameenquiry: false,
    authenticated: false,
    isError: false,
    errors: null
  },
  reducers: {
    clearState: (state) => {
      state.nameenquiry = null;
      state.isError = false;
      state.authenticated = false;
      state.authenticatingnameenquiry = false;
      return state;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(NameEnquiry.fulfilled, (state, action) => {
      state.nameenquiry = action.payload;
      state.authenticated = false;
      state.authenticatingnameenquiry = false;
      return state;
    });
    builder.addCase(NameEnquiry.pending, (state, action) => {
      state.authenticatingnameenquiry = true;
      state.authenticated = true;
    });
    builder.addCase(NameEnquiry.rejected, (state, action) => {
      state.errors = action.errors || action.payload;
      state.authenticated = false;
      state.authenticatingnameenquiry = false;
      state.isError = true;
      return state;
    });
  }
});

export const { clearState } = NameEnquirySlice.actions;

export const NameEnquirySelector = (state) => state.nameenquiry;
