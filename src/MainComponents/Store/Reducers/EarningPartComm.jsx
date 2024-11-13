import { createSlice } from "@reduxjs/toolkit";
import { EarningPartComm } from "../Apis/EarningPartComm";

export const EarningPartCommSlice = createSlice({
  name: "earningpartcomm",
  initialState: {
    earningpartcomm: null,
    authenticatingearningpartcomm: false,
    authenticated: false,
    isError: false,
    errors: null
  },
  reducers: {
    clearState: (state) => {
      state.earningpartcomm = null;
      state.isError = false;
      state.authenticated = false;
      state.authenticatingearningpartcomm = false;
      return state;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(EarningPartComm.fulfilled, (state, action) => {
      state.earningpartcomm = action.payload;
      state.authenticated = false;
      state.authenticatingearningpartcomm = false;
      return state;
    });
    builder.addCase(EarningPartComm.pending, (state, action) => {
      state.authenticatingearningpartcomm = true;
      state.authenticated = true;
    });
    builder.addCase(EarningPartComm.rejected, (state, action) => {
      state.errors = action.errors || action.payload;
      state.authenticated = false;
      state.authenticatingearningpartcomm = false;
      state.isError = true;
      return state;
    });
  }
});

export const { clearState } = EarningPartCommSlice.actions;

export const EarningPartCommSelector = (state) => state.earningpartcomm;
