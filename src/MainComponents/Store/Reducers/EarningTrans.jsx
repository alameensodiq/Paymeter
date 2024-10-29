import { createSlice } from "@reduxjs/toolkit";
import { EarningTrans } from "../Apis/EarningTrans";

export const EarningTransSlice = createSlice({
  name: "earningtrans",
  initialState: {
    earningtrans: null,
    authenticatingearningtrans: false,
    authenticated: false,
    isError: false,
    errors: null
  },
  reducers: {
    clearState: (state) => {
      state.earningtrans = null;
      state.isError = false;
      state.authenticated = false;
      state.authenticatingearningtrans = false;
      return state;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(EarningTrans.fulfilled, (state, action) => {
      state.earningtrans = action.payload;
      state.authenticated = false;
      state.authenticatingearningtrans = false;
      return state;
    });
    builder.addCase(EarningTrans.pending, (state, action) => {
      state.authenticatingearningtrans = true;
      state.authenticated = true;
    });
    builder.addCase(EarningTrans.rejected, (state, action) => {
      state.errors = action.errors || action.payload;
      state.authenticated = false;
      state.authenticatingearningtrans = false;
      state.isError = true;
      return state;
    });
  }
});

export const { clearState } = EarningTransSlice.actions;

export const EarningTransSelector = (state) => state.earningtrans;
