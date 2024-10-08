import { createSlice } from "@reduxjs/toolkit";
import { UserData } from "../Apis/UserData";

export const UserDataSlice = createSlice({
  name: "userdata",
  initialState: {
    userdata: null,
    authenticatinguserdata: false,
    authenticated: false,
    isError: false,
    errors: null
  },
  reducers: {
    clearState: (state) => {
      state.userdata = null;
      state.isError = false;
      state.authenticated = false;
      state.authenticatinguserdata = false;
      return state;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(UserData.fulfilled, (state, action) => {
      state.userdata = action.payload;
      state.authenticated = false;
      state.authenticatinguserdata = false;
      return state;
    });
    builder.addCase(UserData.pending, (state, action) => {
      state.authenticatinguserdata = true;
      state.authenticated = true;
    });
    builder.addCase(UserData.rejected, (state, action) => {
      state.errors = action.errors || action.payload;
      state.authenticated = false;
      state.authenticatinguserdata = false;
      state.isError = true;
      return state;
    });
  }
});

export const { clearState } = UserDataSlice.actions;

export const ApiAgentRoleSelector = (state) => state.userdata;
