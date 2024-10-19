import { createSlice } from "@reduxjs/toolkit";
import { ListofMeter } from "../Apis/ListofMeter";

export const ListofMeterSlice = createSlice({
  name: "listofmeter",
  initialState: {
    listofmeter: null,
    authenticatinglistofmeter: false,
    authenticated: false,
    isError: false,
    errors: null
  },
  reducers: {
    clearState: (state) => {
      state.listofmeter = null;
      state.isError = false;
      state.authenticated = false;
      state.authenticatinglistofmeter = false;
      return state;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(ListofMeter.fulfilled, (state, action) => {
      state.listofmeter = action.payload;
      state.authenticated = false;
      state.authenticatinglistofmeter = false;
      return state;
    });
    builder.addCase(ListofMeter.pending, (state, action) => {
      state.authenticatinglistofmeter = true;
      state.authenticated = true;
    });
    builder.addCase(ListofMeter.rejected, (state, action) => {
      state.errors = action.errors || action.payload;
      state.authenticated = false;
      state.authenticatinglistofmeter = false;
      state.isError = true;
      return state;
    });
  }
});

export const { clearState } = ListofMeterSlice.actions;

export const ListofMeterSelector = (state) => state.listofmeter;
