import { createSlice } from "@reduxjs/toolkit";
import { DistrictAgents } from "../Apis/DistrictAgent";

export const DistrictAgentsSlice = createSlice({
  name: "districtagents",
  initialState: {
    districtagents: null,
    authenticatingdistrictagents: false,
    authenticated: false,
    isError: false,
    errors: null
  },
  reducers: {
    clearState: (state) => {
      state.districtagents = null;
      state.isError = false;
      state.authenticated = false;
      state.authenticatingdistrictagents = false;
      return state;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(DistrictAgents.fulfilled, (state, action) => {
      state.districtagents = action.payload;
      state.authenticated = false;
      state.authenticatingdistrictagents = false;
      return state;
    });
    builder.addCase(DistrictAgents.pending, (state, action) => {
      state.authenticatingdistrictagents = true;
      state.authenticated = true;
    });
    builder.addCase(DistrictAgents.rejected, (state, action) => {
      state.errors = action.errors || action.payload;
      state.authenticated = false;
      state.authenticatingdistrictagents = false;
      state.isError = true;
      return state;
    });
  }
});

export const { clearState } = DistrictAgentsSlice.actions;

export const DistrictAgentsSelector = (state) => state.districtagents;
