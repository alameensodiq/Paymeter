import { createSlice } from "@reduxjs/toolkit";
import { District } from "../Apis/District";

export const DistrictSlice = createSlice({
  name: "district",
  initialState: {
    district: null,
    authenticatingdistrict: false,
    authenticated: false,
    isError: false,
    errors: null
  },
  reducers: {
    clearState: (state) => {
      state.district = null;
      state.isError = false;
      state.authenticated = false;
      state.authenticatingdistrict = false;
      return state;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(District.fulfilled, (state, action) => {
      state.district = action.payload;
      state.authenticated = false;
      state.authenticatingdistrict = false;
      return state;
    });
    builder.addCase(District.pending, (state, action) => {
      state.authenticatingdistrict = true;
      state.authenticated = true;
    });
    builder.addCase(District.rejected, (state, action) => {
      state.errors = action.errors || action.payload;
      state.authenticated = false;
      state.authenticatingdistrict = false;
      state.isError = true;
      return state;
    });
  }
});

export const { clearState } = DistrictSlice.actions;

export const DistrictSelector = (state) => state.district;
