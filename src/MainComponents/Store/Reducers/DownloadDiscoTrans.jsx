import { createSlice } from "@reduxjs/toolkit";
import { DownloadDiscoTrans } from "../Apis/DownloadDiscoTrans";

export const DownloadDiscoTransSlice = createSlice({
  name: "downloaddiscotrans",
  initialState: {
    downloaddiscotrans: null,
    authenticatingdownloaddiscotrans: false,
    authenticated: false,
    isError: false,
    errors: null
  },
  reducers: {
    clearState: (state) => {
      state.downloaddiscotrans = null;
      state.isError = false;
      state.authenticated = false;
      state.authenticatingdownloaddiscotrans = false;
      return state;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(DownloadDiscoTrans.fulfilled, (state, action) => {
      state.downloaddiscotrans = action.payload;
      state.authenticated = false;
      state.authenticatingdownloaddiscotrans = false;
      return state;
    });
    builder.addCase(DownloadDiscoTrans.pending, (state, action) => {
      state.authenticatingdownloaddiscotrans = true;
      state.authenticated = true;
    });
    builder.addCase(DownloadDiscoTrans.rejected, (state, action) => {
      state.errors = action.errors || action.payload;
      state.authenticated = false;
      state.authenticatingdownloaddiscotrans = false;
      state.isError = true;
      return state;
    });
  }
});

export const { clearState } = DownloadDiscoTransSlice.actions;

export const DownloadDiscoTransSelector = (state) => state.downloaddiscotrans;
