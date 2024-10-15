import { createSlice } from "@reduxjs/toolkit";
import { EditSettings } from "../Apis/EditSettings";

export const EditSettingsSlice = createSlice({
  name: "editsettings",
  initialState: {
    editsettings: null,
    authenticatingeditsettings: false,
    authenticated: false,
    isError: false,
    errors: null
  },
  reducers: {
    clearState: (state) => {
      state.editsettings = null;
      state.isError = false;
      state.authenticated = false;
      state.authenticatingeditsettings = false;
      return state;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(EditSettings.fulfilled, (state, action) => {
      state.editsettings = action.payload;
      state.authenticated = false;
      state.authenticatingeditsettings = false;
      return state;
    });
    builder.addCase(EditSettings.pending, (state, action) => {
      state.authenticatingeditsettings = true;
      state.authenticated = true;
    });
    builder.addCase(EditSettings.rejected, (state, action) => {
      state.errors = action.errors || action.payload;
      state.authenticated = false;
      state.authenticatingeditsettings = false;
      state.isError = true;
      return state;
    });
  }
});

export const { clearState } = EditSettingsSlice.actions;

export const EditSettingsSelector = (state) => state.editsettings;
