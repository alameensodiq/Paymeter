import { createSlice } from "@reduxjs/toolkit";
import { Onboarding } from "../Apis/Onboarding";

export const OnboardingSlice = createSlice({
  name: "onboarding",
  initialState: {
    onboarding: null,
    authenticatingonboarding: false,
    authenticated: false,
    isError: false,
    errors: null
  },
  reducers: {
    clearState: (state) => {
      state.onboarding = null;
      state.isError = false;
      state.authenticated = false;
      state.authenticatingonboarding = false;
      return state;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(Onboarding.fulfilled, (state, action) => {
      state.onboarding = action.payload;
      state.authenticated = false;
      state.authenticatingonboarding = false;
      return state;
    });
    builder.addCase(Onboarding.pending, (state, action) => {
      state.authenticatingonboarding = true;
      state.authenticated = true;
    });
    builder.addCase(Onboarding.rejected, (state, action) => {
      state.errors = action.errors || action.payload;
      state.authenticated = false;
      state.authenticatingonboarding = false;
      state.isError = true;
      return state;
    });
  }
});

export const { clearState } = OnboardingSlice.actions;

export const OnboardingSelector = (state) => state.onboarding;
