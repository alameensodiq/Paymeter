import { createSlice } from '@reduxjs/toolkit';
import { Discometer } from '../Apis/Discometer';

export const DiscometerSlice = createSlice({
  name: 'discometer',
  initialState: {
    discometer: null,
    authenticatingdiscometer: false,
    authenticated: false,
    isError: false,
    errors: null,
  },
  reducers: {
    clearState: (state) => {
      state.discometer = null;
      state.isError = false;
      state.authenticated = false;
      state.authenticatingdiscometer = false;
      return state;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(Discometer.fulfilled, (state, action) => {
      state.discometer = action.payload;
      state.authenticated = false;
      state.authenticatingdiscometer = false;
      return state;
    });
    builder.addCase(Discometer.pending, (state, action) => {
        state.authenticatingdiscometer = true;
        state.authenticated = true;
    });
    builder.addCase(Discometer.rejected, (state, action) => {
        state.errors = action.errors || action.payload;
        state.authenticated = false;
        state.authenticatingdiscometer = false;
        state.isError = true;
        return state;
    });
  },
});

export const { clearState } = DiscometerSlice.actions;

export const DiscometerSelector = (state) => state.discometer;
