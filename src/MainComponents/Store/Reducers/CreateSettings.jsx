import { createSlice } from "@reduxjs/toolkit";
import { CreateSettings } from "../Apis/CreateSettings";

export const CreateSettingsSlice = createSlice({
  name: "createsettings",
  initialState: {
    createsettings: null,
    authenticatingcreatesettings: false,
    authenticated: false,
    isError: false,
    errors: null
  },
  reducers: {
    clearState: (state) => {
      state.createsettings = null;
      state.isError = false;
      state.authenticated = false;
      state.authenticatingcreatesettings = false;
      return state;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(CreateSettings.fulfilled, (state, action) => {
      state.createsettings = action.payload;
      state.authenticated = false;
      state.authenticatingcreatesettings = false;
      return state;
    });
    builder.addCase(CreateSettings.pending, (state, action) => {
      state.authenticatinggetsettings = true;
      state.authenticated = true;
    });
    builder.addCase(CreateSettings.rejected, (state, action) => {
      state.errors = action.errors || action.payload;
      state.authenticated = false;
      state.authenticatingcreatesettings = false;
      state.isError = true;
      return state;
    });
  }
});

export const { clearState } = CreateSettingsSlice.actions;

export const CreateSettingsSelector = (state) => state.createsettings;
