import { createSlice } from "@reduxjs/toolkit";
import { GetCommission } from "../Apis/GetCommission";

export const GetCommissionSlice = createSlice({
  name: "getcommission",
  initialState: {
    getcommission: null,
    authenticatinggetcommission: false,
    authenticated: false,
    isError: false,
    errors: null
  },
  reducers: {
    clearState: (state) => {
      state.getcommission = null;
      state.isError = false;
      state.authenticated = false;
      state.authenticatinggetcommission = false;
      return state;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(GetCommission.fulfilled, (state, action) => {
      state.getcommission = action.payload;
      state.authenticated = false;
      state.authenticatinggetcommission = false;
      return state;
    });
    builder.addCase(GetCommission.pending, (state, action) => {
      state.authenticatinggetcommission = true;
      state.authenticated = true;
    });
    builder.addCase(GetCommission.rejected, (state, action) => {
      state.errors = action.errors || action.payload;
      state.authenticated = false;
      state.authenticatinggetcommission = false;
      state.isError = true;
      return state;
    });
  }
});

export const { clearState } = GetCommissionSlice.actions;

export const GetCommissionSelector = (state) => state.getcommission;
