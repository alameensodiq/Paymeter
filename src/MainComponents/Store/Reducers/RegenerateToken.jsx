import { createSlice } from "@reduxjs/toolkit";
import { RegenerateToken } from "../Apis/Regenratetoken";

export const RegenerateTokenSlice = createSlice({
  name: "regenerate",
  initialState: {
    regenerate: null,
    authenticatingregenerate: false,
    authenticated: false,
    isError: false,
    errors: null
  },
  reducers: {
    clearState: (state) => {
      state.regenerate = null;
      state.isError = false;
      state.authenticated = false;
      state.authenticatingregenerate = false;
      return state;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(RegenerateToken.fulfilled, (state, action) => {
      state.regenerate = action.payload;
      state.authenticated = false;
      state.authenticatingregenerate = false;
      return state;
    });
    builder.addCase(RegenerateToken.pending, (state, action) => {
      state.authenticatingregenerate = true;
      state.authenticated = true;
    });
    builder.addCase(RegenerateToken.rejected, (state, action) => {
      state.errors = action.errors || action.payload;
      state.authenticated = false;
      state.authenticatingregenerate = false;
      state.isError = true;
      return state;
    });
  }
});

export const { clearState } = RegenerateTokenSlice.actions;

export const RegenerateTokenSelector = (state) => state.regenerate;
