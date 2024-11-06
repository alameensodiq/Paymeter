import { createSlice } from "@reduxjs/toolkit";
import { EarningCard } from "../Apis/EaningCard";

export const EarningCardSlice = createSlice({
  name: "earningcard",
  initialState: {
    earningcard: null,
    authenticatingearningcard: false,
    authenticated: false,
    isError: false,
    errors: null
  },
  reducers: {
    clearState: (state) => {
      state.earningcard = null;
      state.isError = false;
      state.authenticated = false;
      state.authenticatingearningcard = false;
      return state;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(EarningCard.fulfilled, (state, action) => {
      state.earningcard = action.payload;
      state.authenticated = false;
      state.authenticatingearningcard = false;
      return state;
    });
    builder.addCase(EarningCard.pending, (state, action) => {
      state.authenticatingearningcard = true;
      state.authenticated = true;
    });
    builder.addCase(EarningCard.rejected, (state, action) => {
      state.errors = action.errors || action.payload;
      state.authenticated = false;
      state.authenticatingearningcard = false;
      state.isError = true;
      return state;
    });
  }
});

export const { clearState } = EarningCardSlice.actions;

export const EarningCardSelector = (state) => state.earningcard;
