import { createSlice } from "@reduxjs/toolkit";
import { AgentManager } from "../Apis/AgentManager";

export const AgentManagerSlice = createSlice({
  name: "agentmanager",
  initialState: {
    agentmanager: null,
    authenticatingagentmanager: false,
    authenticated: false,
    isError: false,
    errors: null
  },
  reducers: {
    clearState: (state) => {
      state.agentmanager = null;
      state.isError = false;
      state.authenticated = false;
      state.authenticatingagentmanager = false;
      return state;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(AgentManager.fulfilled, (state, action) => {
      state.agentmanager = action.payload;
      state.authenticated = false;
      state.authenticatingagentmanager = false;
      return state;
    });
    builder.addCase(AgentManager.pending, (state, action) => {
      state.authenticatingagentmanager = true;
      state.authenticated = true;
    });
    builder.addCase(AgentManager.rejected, (state, action) => {
      state.errors = action.errors || action.payload;
      state.authenticated = false;
      state.authenticatingagentmanager = false;
      state.isError = true;
      return state;
    });
  }
});

export const { clearState } = AgentManagerSlice.actions;

export const AgentManagerSelector = (state) => state.agentmanager;
