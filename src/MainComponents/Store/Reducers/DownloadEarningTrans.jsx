import { createSlice } from "@reduxjs/toolkit";
import { DownloadEarningTrans } from "../Apis/DownloadEarningTrans";

export const DownloadEarningTransSlice = createSlice({
  name: "downloadearningtrans",
  initialState: {
    downloadearningtrans: null,
    authenticatingdownloadearningtrans: false,
    authenticated: false,
    isError: false,
    errors: null
  },
  reducers: {
    clearState: (state) => {
      state.downloadearningtrans = null;
      state.isError = false;
      state.authenticated = false;
      state.authenticatingdownloadearningtrans = false;
      return state;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(DownloadEarningTrans.fulfilled, (state, action) => {
      state.downloadearningtrans = action.payload;
      state.authenticated = false;
      state.authenticatingdownloadearningtrans = false;
      return state;
    });
    builder.addCase(DownloadEarningTrans.pending, (state, action) => {
      state.authenticatingdownloadearningtrans = true;
      state.authenticated = true;
    });
    builder.addCase(DownloadEarningTrans.rejected, (state, action) => {
      state.errors = action.errors || action.payload;
      state.authenticated = false;
      state.authenticatingdownloadearningtrans = false;
      state.isError = true;
      return state;
    });
  }
});

export const { clearState } = DownloadEarningTransSlice.actions;

export const DownloadEarningTransSelector = (state) =>
  state.downloadearningtrans;
