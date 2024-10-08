import { createSlice } from "@reduxjs/toolkit";
import { Fundings } from "../Apis/Funding";

export const FundingSlice = createSlice({
  name: "funding",
  initialState: {
    funding: null,
    authenticatingfunding: false,
    authenticated: false,
    isError: false,
    errors: null
  },
  reducers: {
    clearState: (state) => {
      state.funding = null;
      state.isError = false;
      state.authenticated = false;
      state.authenticatingfunding = false;
      return state;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(Fundings.fulfilled, (state, action) => {
      state.funding = action.payload;
      state.authenticated = false;
      state.authenticatingfunding = false;
      return state;
    });
    builder.addCase(Fundings.pending, (state, action) => {
      state.authenticatingfunding = true;
      state.authenticated = true;
    });
    builder.addCase(Fundings.rejected, (state, action) => {
      state.errors = action.errors || action.payload;
      state.authenticated = false;
      state.authenticatingfunding = false;
      state.isError = true;
      return state;
    });
  }
});

export const { clearState } = FundingSlice.actions;

export const FundingSelector = (state) => state.funding;
