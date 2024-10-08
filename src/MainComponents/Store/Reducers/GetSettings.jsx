import { createSlice } from "@reduxjs/toolkit";
import { GetSettings } from "../Apis/GetSettings";

export const GetSettingsSlice = createSlice({
  name: "getsettings",
  initialState: {
    getsettings: null,
    authenticatinggetsettings: false,
    authenticated: false,
    isError: false,
    errors: null
  },
  reducers: {
    clearState: (state) => {
      state.getsettings = null;
      state.isError = false;
      state.authenticated = false;
      state.authenticatinggetsettings = false;
      return state;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(GetSettings.fulfilled, (state, action) => {
      state.getsettings = action.payload;
      state.authenticated = false;
      state.authenticatinggetsettings = false;
      return state;
    });
    builder.addCase(GetSettings.pending, (state, action) => {
      state.authenticatinggetsettings = true;
      state.authenticated = true;
    });
    builder.addCase(GetSettings.rejected, (state, action) => {
      state.errors = action.errors || action.payload;
      state.authenticated = false;
      state.authenticatinggetsettings = false;
      state.isError = true;
      return state;
    });
  }
});

export const { clearState } = GetSettingsSlice.actions;

export const GetSettingsSelector = (state) => state.getsettings;
