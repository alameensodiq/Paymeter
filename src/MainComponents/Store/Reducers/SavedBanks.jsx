import { createSlice } from "@reduxjs/toolkit";
import { SavedBanks } from "../Apis/SavedBanks";

export const SavedBanksSlice = createSlice({
  name: "savedbanks",
  initialState: {
    savedbanks: null,
    authenticatingsavedbanks: false,
    authenticated: false,
    isError: false,
    errors: null
  },
  reducers: {
    clearState: (state) => {
      state.savedbanks = null;
      state.isError = false;
      state.authenticated = false;
      state.authenticatingsavedbanks = false;
      return state;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(SavedBanks.fulfilled, (state, action) => {
      state.savedbanks = action.payload;
      state.authenticated = false;
      state.authenticatingsavedbanks = false;
      return state;
    });
    builder.addCase(SavedBanks.pending, (state, action) => {
      state.authenticatingsavedbanks = true;
      state.authenticated = true;
    });
    builder.addCase(SavedBanks.rejected, (state, action) => {
      state.errors = action.errors || action.payload;
      state.authenticated = false;
      state.authenticatingsavedbanks = false;
      state.isError = true;
      return state;
    });
  }
});

export const { clearState } = SavedBanksSlice.actions;

export const SavedBanksSelector = (state) => state.savedbanks;
