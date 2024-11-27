import { createSlice } from "@reduxjs/toolkit";
import { Agentmetering } from "../Apis/Agentmetering";

export const AgentmeteringSlice = createSlice({
  name: "agentmeters",
  initialState: {
    agentmeters: null,
    authenticatingagentmeters: false,
    authenticated: false,
    isError: false,
    errors: null
  },
  reducers: {
    clearState: (state) => {
      state.agentmeters = null;
      state.isError = false;
      state.authenticated = false;
      state.authenticatingagentmeters = false;
      return state;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(Agentmetering.fulfilled, (state, action) => {
      state.agentmeters = action.payload;
      state.authenticated = false;
      state.authenticatingagentmeters = false;
      return state;
    });
    builder.addCase(Agentmetering.pending, (state, action) => {
      state.authenticatingagentmeters = true;
      state.authenticated = true;
    });
    builder.addCase(Agentmetering.rejected, (state, action) => {
      state.errors = action.errors || action.payload;
      state.authenticated = false;
      state.authenticatingagentmeters = false;
      state.isError = true;
      return state;
    });
  }
});

export const { clearState } = AgentmeteringSlice.actions;

export const AgentmeteringSelector = (state) => state.agentmeters;
