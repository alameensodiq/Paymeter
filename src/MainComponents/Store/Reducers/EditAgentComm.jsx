import { createSlice } from "@reduxjs/toolkit";
import { EditAgentComm } from "../Apis/EditAgentComm";

export const EditAgentCommSlice = createSlice({
  name: "editagentcommissioning",
  initialState: {
    editagentcommissioning: null,
    authenticatingeditagentcommissioning: false,
    authenticated: false,
    isError: false,
    errors: null
  },
  reducers: {
    clearState: (state) => {
      state.editagentcommissioning = null;
      state.isError = false;
      state.authenticated = false;
      state.authenticatingeditagentcommissioning = false;
      return state;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(EditAgentComm.fulfilled, (state, action) => {
      state.editagentcommissioning = action.payload;
      state.authenticated = false;
      state.authenticatingeditagentcommissioning = false;
      return state;
    });
    builder.addCase(EditAgentComm.pending, (state, action) => {
      state.authenticatingeditagentcommissioning = true;
      state.authenticated = true;
    });
    builder.addCase(EditAgentComm.rejected, (state, action) => {
      state.errors = action.errors || action.payload;
      state.authenticated = false;
      state.authenticatingeditagentcommissioning = false;
      state.isError = true;
      return state;
    });
  }
});

export const { clearState } = EditAgentCommSlice.actions;

export const EditAgentCommSelector = (state) => state.editagentcommissioning;
