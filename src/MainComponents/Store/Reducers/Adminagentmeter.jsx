import { createSlice } from "@reduxjs/toolkit";
import { Adminagentmeter } from "../Apis/Adminagentmeter";

export const AdminagentmeterSlice = createSlice({
  name: "adminagentmeter",
  initialState: {
    adminagentmeter: null,
    authenticatingadminagentmeter: false,
    authenticated: false,
    isError: false,
    errors: null
  },
  reducers: {
    clearState: (state) => {
      state.adminagentmeter = null;
      state.isError = false;
      state.authenticated = false;
      state.authenticatingadminagentmeter = false;
      return state;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(Adminagentmeter.fulfilled, (state, action) => {
      state.adminagentmeter = action.payload;
      state.authenticated = false;
      state.authenticatingadminagentmeter = false;
      return state;
    });
    builder.addCase(Adminagentmeter.pending, (state, action) => {
      state.authenticatingadminagentmeter = true;
      state.authenticated = true;
    });
    builder.addCase(Adminagentmeter.rejected, (state, action) => {
      state.errors = action.errors || action.payload;
      state.authenticated = false;
      state.authenticatingadminagentmeter = false;
      state.isError = true;
      return state;
    });
  }
});

export const { clearState } = AdminagentmeterSlice.actions;

export const AdminagentmeterSelector = (state) => state.adminagentmeter;
