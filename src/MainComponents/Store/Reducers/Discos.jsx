import { createSlice } from '@reduxjs/toolkit';
import { Discos } from '../Apis/Discos';

export const DiscosSlice = createSlice({
  name: 'discos',
  initialState: {
    discos: null,
    authenticatingdiscos: false,
    authenticated: false,
    isError: false,
    errors: null,
  },
  reducers: {
    clearState: (state) => {
      state.discos = null;
      state.isError = false;
      state.authenticated = false;
      state.authenticatingdiscos = false;
      return state;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(Discos.fulfilled, (state, action) => {
      state.discos = action.payload;
      state.authenticated = false;
      state.authenticatingdiscos = false;
      return state;
    });
    builder.addCase(Discos.pending, (state, action) => {
        state.authenticatingdiscos = true;
        state.authenticated = true;
    });
    builder.addCase(Discos.rejected, (state, action) => {
        state.errors = action.errors || action.payload;
        state.authenticated = false;
        state.authenticatingdiscos = false;
        state.isError = true;
        return state;
    });
  },
});

export const { clearState } = DiscosSlice.actions;

export const DiscosSelector = (state) => state.discos;
