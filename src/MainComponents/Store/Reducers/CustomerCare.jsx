import { createSlice } from "@reduxjs/toolkit";
import { CreateCustomerCare } from "../Apis/CreateCustomerCare";

export const CustomerCareSlice = createSlice({
  name: "createcustomer",
  initialState: {
    createcustomer: null,
    authenticatingcreatecustomer: false,
    authenticated: false,
    isError: false,
    errors: null
  },
  reducers: {
    clearState: (state) => {
      state.createcustomer = null;
      state.isError = false;
      state.authenticated = false;
      state.authenticatingcreatecustomer = false;
      return state;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(CreateCustomerCare.fulfilled, (state, action) => {
      state.createcustomer = action.payload;
      state.authenticated = false;
      state.authenticatingcreatecustomer = false;
      return state;
    });
    builder.addCase(CreateCustomerCare.pending, (state, action) => {
      state.authenticatingcreatecustomer = true;
      state.authenticated = true;
    });
    builder.addCase(CreateCustomerCare.rejected, (state, action) => {
      state.errors = action.errors || action.payload;
      state.authenticated = false;
      state.authenticatingcreatecustomer = false;
      state.isError = true;
      return state;
    });
  }
});

export const { clearState } = CustomerCareSlice.actions;

export const CustomerCareSelector = (state) => state.createcustomer;
