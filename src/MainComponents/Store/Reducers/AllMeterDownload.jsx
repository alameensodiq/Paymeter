import { createSlice } from "@reduxjs/toolkit";
import { AllmeterDownload } from "../Apis/AllMeterDownload";

export const AllMeterDownloadSlice = createSlice({
  name: "allmeterdownload",
  initialState: {
    allmeterdownload: null,
    authenticatingallmeterdownload: false,
    authenticated: false,
    isError: false,
    errors: null
  },
  reducers: {
    clearState: (state) => {
      state.allmeterdownload = null;
      state.isError = false;
      state.authenticated = false;
      state.authenticatingallmeterdownload = false;
      return state;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(AllmeterDownload.fulfilled, (state, action) => {
      console.log(action.payload);
      state.allmeterdownload = action.payload;
      state.authenticated = false;
      state.authenticatingallmeterdownload = false;
      return state;
    });
    builder.addCase(AllmeterDownload.pending, (state, action) => {
      state.authenticatingallmeterdownload = true;
      state.authenticated = true;
    });
    builder.addCase(AllmeterDownload.rejected, (state, action) => {
      state.errors = action.errors || action.payload;
      state.authenticated = false;
      state.authenticatingallmeterdownload = false;
      state.isError = true;
      return state;
    });
  }
});

export const { clearState } = AllMeterDownloadSlice.actions;

export const AllmeterDownloadSelector = (state) => state.allmeterdownload;
