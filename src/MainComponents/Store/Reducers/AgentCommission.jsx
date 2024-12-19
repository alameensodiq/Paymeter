import { createSlice } from "@reduxjs/toolkit";
import { AgentCommission } from "../Apis/AgentCommission";

export const AgentCommissionSlice = createSlice({
  name: "agentcommissions",
  initialState: {
    agentcommissions: null,
    authenticatingagentcommissions: false,
    authenticated: false,
    isError: false,
    errors: null
  },
  reducers: {
    clearState: (state) => {
      state.agentcommissions = null;
      state.isError = false;
      state.authenticated = false;
      state.authenticatingagentcommissions = false;
      return state;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(AgentCommission.fulfilled, (state, action) => {
      state.agentcommissions = action.payload;
      state.authenticated = false;
      state.authenticatingagentcommissions = false;
      return state;
    });
    builder.addCase(AgentCommission.pending, (state, action) => {
      state.authenticatingagentcommissions = true;
      state.authenticated = true;
    });
    builder.addCase(AgentCommission.rejected, (state, action) => {
      state.errors = action.errors || action.payload;
      state.authenticated = false;
      state.authenticatingagentcommissions = false;
      state.isError = true;
      return state;
    });
  }
});

export const { clearState } = AgentCommissionSlice.actions;

export const AgentCommissionSelector = (state) => state.agentcommissions;
