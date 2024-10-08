import { createSlice } from '@reduxjs/toolkit';
import { CreateBank } from '../Apis/CreateBank';

export const CreateBankSlice = createSlice({
  name: 'createdbank',
  initialState: {
    createdbank: null,
    authenticatingcreatedbank: false,
    authenticated: false,
    isError: false,
    errors: null,
  },
  reducers: {
    clearState: (state) => {
      state.createdbank = null;
      state.isError = false;
      state.authenticated = false;
      state.authenticatingcreatedbank = false;
      return state;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(CreateBank.fulfilled, (state, action) => {
      state.createdbank = action.payload;
      state.authenticated = false;
      state.authenticatingcreatedbank = false;
      return state;
    });
    builder.addCase(CreateBank.pending, (state, action) => {
        state.authenticatingcreatedbank = true;
        state.authenticated = true;
    });
    builder.addCase(CreateBank.rejected, (state, action) => {
        state.errors = action.errors || action.payload;
        state.authenticated = false;
        state.authenticatingcreatedbank = false;
        state.isError = true;
        return state;
    });
  },
});

export const { clearState } = CreateBankSlice.actions;

export const CreateBankSelector = (state) => state.createdbank;
