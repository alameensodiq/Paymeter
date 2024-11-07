import { createSlice } from "@reduxjs/toolkit";
import { EditingEarning } from "../Apis/EditingEarning";

export const EditingEarningSlice = createSlice({
  name: "earningediting",
  initialState: {
    earningediting: null,
    authenticatingearningediting: false,
    authenticated: false,
    isError: false,
    errors: null
  },
  reducers: {
    clearState: (state) => {
      state.earningediting = null;
      state.isError = false;
      state.authenticated = false;
      state.authenticatingearningediting = false;
      return state;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(EditingEarning.fulfilled, (state, action) => {
      state.earningediting = action.payload;
      state.authenticated = false;
      state.authenticatingearningediting = false;
      return state;
    });
    builder.addCase(EditingEarning.pending, (state, action) => {
      state.authenticatingearningediting = true;
      state.authenticated = true;
    });
    builder.addCase(EditingEarning.rejected, (state, action) => {
      state.errors = action.errors || action.payload;
      state.authenticated = false;
      state.authenticatingearningediting = false;
      state.isError = true;
      return state;
    });
  }
});

export const { clearState } = EditingEarningSlice.actions;

export const EditingEarningSelector = (state) => state.earningediting;
