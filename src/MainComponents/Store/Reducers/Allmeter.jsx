import { createSlice } from "@reduxjs/toolkit";
import { Allmeter } from "../Apis/Allmeter";

export const AllmeterSlice = createSlice({
  name: "allmetre",
  initialState: {
    allmetre: null,
    authenticatingallmetre: false,
    authenticated: false,
    isError: false,
    errors: null
  },
  reducers: {
    clearState: (state) => {
      state.allmetre = null;
      state.isError = false;
      state.authenticated = false;
      state.authenticatingallmetre = false;
      return state;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(Allmeter.fulfilled, (state, action) => {
      state.allmetre = action.payload;
      state.authenticated = false;
      state.authenticatingallmetre = false;
      return state;
    });
    builder.addCase(Allmeter.pending, (state, action) => {
      state.authenticatingallmetre = true;
      state.authenticated = true;
    });
    builder.addCase(Allmeter.rejected, (state, action) => {
      state.errors = action.errors || action.payload;
      state.authenticated = false;
      state.authenticatingallmetre = false;
      state.isError = true;
      return state;
    });
  }
});

export const { clearState } = AllmeterSlice.actions;

export const AllmeterSelector = (state) => state.allmetre;
