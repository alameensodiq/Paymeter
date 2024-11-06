import { createSlice } from "@reduxjs/toolkit";
import { DiscoCard } from "../Apis/DiscoCard";

export const DiscoCardSlice = createSlice({
  name: "discocard",
  initialState: {
    discocard: null,
    authenticatingdiscocard: false,
    authenticated: false,
    isError: false,
    errors: null
  },
  reducers: {
    clearState: (state) => {
      state.discocard = null;
      state.isError = false;
      state.authenticated = false;
      state.authenticatingdiscocard = false;
      return state;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(DiscoCard.fulfilled, (state, action) => {
      state.discocard = action.payload;
      state.authenticated = false;
      state.authenticatingdiscocard = false;
      return state;
    });
    builder.addCase(DiscoCard.pending, (state, action) => {
      state.authenticatingdiscocard = true;
      state.authenticated = true;
    });
    builder.addCase(DiscoCard.rejected, (state, action) => {
      state.errors = action.errors || action.payload;
      state.authenticated = false;
      state.authenticatingdiscocard = false;
      state.isError = true;
      return state;
    });
  }
});

export const { clearState } = DiscoCardSlice.actions;

export const DiscoCardSelector = (state) => state.discocard;
