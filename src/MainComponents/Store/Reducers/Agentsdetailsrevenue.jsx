import { createSlice } from "@reduxjs/toolkit";
import { Agentsdetailsrevenue } from "../Apis/Agentsdetailsrevenue";

export const AgentsdetailsrevenueSlice = createSlice({
  name: "agentsdetailsrevenue",
  initialState: {
    agentsdetailsrevenue: null,
    authenticatingagentsdetailsrevenue: false,
    authenticated: false,
    isError: false,
    errors: null
  },
  reducers: {
    clearState: (state) => {
      state.agentsdetailsrevenue = null;
      state.isError = false;
      state.authenticated = false;
      state.authenticatingagentsdetailsrevenue = false;
      return state;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(Agentsdetailsrevenue.fulfilled, (state, action) => {
      state.agentsdetailsrevenue = action.payload;
      state.authenticated = false;
      state.authenticatingagentsdetailsrevenue = false;
      return state;
    });
    builder.addCase(Agentsdetailsrevenue.pending, (state, action) => {
      state.authenticatingagentsdetailsrevenue = true;
      state.authenticated = true;
    });
    builder.addCase(Agentsdetailsrevenue.rejected, (state, action) => {
      state.errors = action.errors || action.payload;
      state.authenticated = false;
      state.authenticatingagentsdetailsrevenue = false;
      state.isError = true;
      return state;
    });
  }
});

export const { clearState } = AgentsdetailsrevenueSlice.actions;

export const AgentsdetailsrevenueSelector = (state) =>
  state.agentsdetailsrevenue;
