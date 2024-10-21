import { createSlice } from "@reduxjs/toolkit";
import { CreateManager } from "../Apis/CreateManager";

export const CreateManagerSlice = createSlice({
  name: "managers",
  initialState: {
    managers: null,
    authenticatingmanagers: false,
    authenticated: false,
    isError: false,
    errors: null
  },
  reducers: {
    clearState: (state) => {
      state.managers = null;
      state.isError = false;
      state.authenticated = false;
      state.authenticatingmanagers = false;
      return state;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(CreateManager.fulfilled, (state, action) => {
      state.managers = action.payload;
      state.authenticated = false;
      state.authenticatingmanagers = false;
      return state;
    });
    builder.addCase(CreateManager.pending, (state, action) => {
      state.authenticatingmanagers = true;
      state.authenticated = true;
    });
    builder.addCase(CreateManager.rejected, (state, action) => {
      state.errors = action.errors || action.payload;
      state.authenticated = false;
      state.authenticatingmanagers = false;
      state.isError = true;
      return state;
    });
  }
});

export const { clearState } = CreateManagerSlice.actions;

export const CreateManagerSelector = (state) => state.managers;
