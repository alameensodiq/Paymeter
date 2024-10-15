import { createSlice } from "@reduxjs/toolkit";
import { UserComEdit } from "../Apis/UserComEdit";

export const UserComEditSlice = createSlice({
  name: "usercomedit",
  initialState: {
    usercomedit: null,
    authenticatingusercomedit: false,
    authenticated: false,
    isError: false,
    errors: null
  },
  reducers: {
    clearState: (state) => {
      state.usercomedit = null;
      state.isError = false;
      state.authenticated = false;
      state.authenticatingusercomedit = false;
      return state;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(UserComEdit.fulfilled, (state, action) => {
      state.usercomedit = action.payload;
      state.authenticated = false;
      state.authenticatingusercomedit = false;
      return state;
    });
    builder.addCase(UserComEdit.pending, (state, action) => {
      state.authenticatingusercomedit = true;
      state.authenticated = true;
    });
    builder.addCase(UserComEdit.rejected, (state, action) => {
      state.errors = action.errors || action.payload;
      state.authenticated = false;
      state.authenticatingusercomedit = false;
      state.isError = true;
      return state;
    });
  }
});

export const { clearState } = UserComEditSlice.actions;

export const UserComEditSelector = (state) => state.usercomedit;
