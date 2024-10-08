import { createSlice } from "@reduxjs/toolkit";
import { ApiAgentRole } from "../Apis/ApiAgentRoles";

export const ApiAgentRoleSlice = createSlice({
  name: "apiagentrole",
  initialState: {
    apiagentrole: null,
    authenticatingapiagentrole: false,
    authenticated: false,
    isError: false,
    errors: null
  },
  reducers: {
    clearState: (state) => {
      state.apiagentrole = null;
      state.isError = false;
      state.authenticated = false;
      state.authenticatingapiagentrole = false;
      return state;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(ApiAgentRole.fulfilled, (state, action) => {
      state.apiagentrole = action.payload;
      state.authenticated = false;
      state.authenticatingapiagentrole = false;
      return state;
    });
    builder.addCase(ApiAgentRole.pending, (state, action) => {
      state.authenticatingapiagentrole = true;
      state.authenticated = true;
    });
    builder.addCase(ApiAgentRole.rejected, (state, action) => {
      state.errors = action.errors || action.payload;
      state.authenticated = false;
      state.authenticatingapiagentrole = false;
      state.isError = true;
      return state;
    });
  }
});

export const { clearState } = ApiAgentRoleSlice.actions;

export const ApiAgentRoleSelector = (state) => state.apiagentrole;
