import { createSlice } from '@reduxjs/toolkit';
import { CreatedDisco } from '../Apis/CreatedDisco';

export const CreatesDiscSlice = createSlice({
  name: 'createdisc',
  initialState: {
    createdisc: null,
    authenticatingcreatedisc: false,
    authenticated: false,
    isError: false,
    errors: null,
  },
  reducers: {
    clearState: (state) => {
      state.createdisc = null;
      state.isError = false;
      state.authenticated = false;
      state.authenticatingcreatedisc = false;
      return state;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(CreatedDisco.fulfilled, (state, action) => {
      state.createdisc = action.payload;
      state.authenticated = false;
      state.authenticatingcreatedisc = false;
      return state;
    });
    builder.addCase(CreatedDisco.pending, (state, action) => {
        state.authenticatingcreatedisc = true;
        state.authenticated = true;
    });
    builder.addCase(CreatedDisco.rejected, (state, action) => {
        state.errors = action.errors || action.payload;
        state.authenticated = false;
        state.authenticatingcreatedisc = false;
        state.isError = true;
        return state;
    });
  },
});

export const { clearState } = CreatesDiscSlice.actions;

export const CreatesDiscSelector = (state) => state.createdisc;
