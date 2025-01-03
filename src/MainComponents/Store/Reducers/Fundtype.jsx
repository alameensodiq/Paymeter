import { createSlice } from "@reduxjs/toolkit";
import { FundType } from "../Apis/Fundtype";

export const FundTypeSlice = createSlice({
  name: "fundtype",
  initialState: {
    fundtype: null,
    authenticatingfundtype: false,
    authenticated: false,
    isError: false,
    errors: null
  },
  reducers: {
    clearState: (state) => {
      state.fundtype = null;
      state.isError = false;
      state.authenticated = false;
      state.authenticatingfundtype = false;
      return state;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(FundType.fulfilled, (state, action) => {
      state.fundtype = action.payload;
      state.authenticated = false;
      state.authenticatingfundtype = false;
      return state;
    });
    builder.addCase(FundType.pending, (state, action) => {
      state.authenticatingfundtype = true;
      state.authenticated = true;
    });
    builder.addCase(FundType.rejected, (state, action) => {
      state.errors = action.errors || action.payload;
      state.authenticated = false;
      state.authenticatingfundtype = false;
      state.isError = true;
      return state;
    });
  }
});

export const { clearState } = FundTypeSlice.actions;

export const FundTypeSelector = (state) => state.fundtype;
