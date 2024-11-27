import { createSlice } from "@reduxjs/toolkit";
import { AgentSummary } from "../Apis/AgentSummary";

export const AgentSummarySlice = createSlice({
  name: "agentsummary",
  initialState: {
    agentsummary: null,
    authenticatingagentsummary: false,
    authenticated: false,
    isError: false,
    errors: null
  },
  reducers: {
    clearState: (state) => {
      state.agentsummary = null;
      state.isError = false;
      state.authenticated = false;
      state.authenticatingagentsummary = false;
      return state;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(AgentSummary.fulfilled, (state, action) => {
      state.agentsummary = action.payload;
      state.authenticated = false;
      state.authenticatingagentsummary = false;
      return state;
    });
    builder.addCase(AgentSummary.pending, (state, action) => {
      state.authenticatingagentsummary = true;
      state.authenticated = true;
    });
    builder.addCase(AgentSummary.rejected, (state, action) => {
      state.errors = action.errors || action.payload;
      state.authenticated = false;
      state.authenticatingagentsummary = false;
      state.isError = true;
      return state;
    });
  }
});

export const { clearState } = AgentSummarySlice.actions;

export const AgentSummarySelector = (state) => state.agentsummary;
