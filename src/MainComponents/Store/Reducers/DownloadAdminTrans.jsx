import { createSlice } from "@reduxjs/toolkit";
import { DownloadAdminTrans } from "../Apis/DownloadAdminTrans";

export const DownloadAdminTransSlice = createSlice({
  name: "downloadadmintrans",
  initialState: {
    downloadadmintrans: null,
    authenticatingdownloadadmintrans: false,
    authenticated: false,
    isError: false,
    errors: null
  },
  reducers: {
    clearState: (state) => {
      state.downloadadmintrans = null;
      state.isError = false;
      state.authenticated = false;
      state.authenticatingdownloadadmintrans = false;
      return state;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(DownloadAdminTrans.fulfilled, (state, action) => {
      state.downloadadmintrans = action.payload;
      state.authenticated = false;
      state.authenticatingdownloadadmintrans = false;
      return state;
    });
    builder.addCase(DownloadAdminTrans.pending, (state, action) => {
      state.authenticatingdownloadadmintrans = true;
      state.authenticated = true;
    });
    builder.addCase(DownloadAdminTrans.rejected, (state, action) => {
      state.errors = action.errors || action.payload;
      state.authenticated = false;
      state.authenticatingdownloadadmintrans = false;
      state.isError = true;
      return state;
    });
  }
});

export const { clearState } = DownloadAdminTransSlice.actions;

export const DownloadAdminTransSelector = (state) => state.downloadadmintrans;
