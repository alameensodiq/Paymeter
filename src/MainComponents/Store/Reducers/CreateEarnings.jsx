import { createSlice } from "@reduxjs/toolkit";
import { CreateEarnings } from "../Apis/CreateEarnings";

export const CreateEarningsSlice = createSlice({
  name: "earningpartner",
  initialState: {
    earningpartner: null,
    authenticatingearningpartner: false,
    authenticated: false,
    isError: false,
    errors: null
  },
  reducers: {
    clearState: (state) => {
      state.earningpartner = null;
      state.isError = false;
      state.authenticated = false;
      state.authenticatingearningpartner = false;
      return state;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(CreateEarnings.fulfilled, (state, action) => {
      state.earningpartner = action.payload;
      state.authenticated = false;
      state.authenticatingearningpartner = false;
      return state;
    });
    builder.addCase(CreateEarnings.pending, (state, action) => {
      state.authenticatingearningpartner = true;
      state.authenticated = true;
    });
    builder.addCase(CreateEarnings.rejected, (state, action) => {
      state.errors = action.errors || action.payload;
      state.authenticated = false;
      state.authenticatingearningpartner = false;
      state.isError = true;
      return state;
    });
  }
});

export const { clearState } = CreateEarningsSlice.actions;

export const CreateEarningsSelector = (state) => state.earningpartner;
