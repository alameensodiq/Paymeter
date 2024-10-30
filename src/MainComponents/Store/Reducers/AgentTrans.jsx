import { createSlice } from "@reduxjs/toolkit";
import { AgentTrans } from "../Apis/AgentTrans";

export const AgentTransSlice = createSlice({
  name: "agenttrans",
  initialState: {
    agenttrans: null,
    authenticatingagenttrans: false,
    authenticated: false,
    isError: false,
    errors: null
  },
  reducers: {
    clearState: (state) => {
      state.agenttrans = null;
      state.isError = false;
      state.authenticated = false;
      state.authenticatingagenttrans = false;
      return state;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(AgentTrans.fulfilled, (state, action) => {
      state.agenttrans = action.payload;
      state.authenticated = false;
      state.authenticatingagenttrans = false;
      return state;
    });
    builder.addCase(AgentTrans.pending, (state, action) => {
      state.authenticatingagenttrans = true;
      state.authenticated = true;
    });
    builder.addCase(AgentTrans.rejected, (state, action) => {
      state.errors = action.errors || action.payload;
      state.authenticated = false;
      state.authenticatingagenttrans = false;
      state.isError = true;
      return state;
    });
  }
});

export const { clearState } = AgentTransSlice.actions;

export const AgentTransSelector = (state) => state.agenttrans;
