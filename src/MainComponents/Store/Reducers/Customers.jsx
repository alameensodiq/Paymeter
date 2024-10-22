import { createSlice } from "@reduxjs/toolkit";
import { Customers } from "../Apis/Customers";

export const CustomersSlice = createSlice({
  name: "customers",
  initialState: {
    customers: null,
    authenticatingcustomers: false,
    authenticated: false,
    isError: false,
    errors: null
  },
  reducers: {
    clearState: (state) => {
      state.customers = null;
      state.isError = false;
      state.authenticated = false;
      state.authenticatingcustomers = false;
      return state;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(Customers.fulfilled, (state, action) => {
      state.customers = action.payload;
      state.authenticated = false;
      state.authenticatingcustomers = false;
      return state;
    });
    builder.addCase(Customers.pending, (state, action) => {
      state.authenticatingcustomers = true;
      state.authenticated = true;
    });
    builder.addCase(Customers.rejected, (state, action) => {
      state.errors = action.errors || action.payload;
      state.authenticated = false;
      state.authenticatingcustomers = false;
      state.isError = true;
      return state;
    });
  }
});

export const { clearState } = CustomersSlice.actions;

export const CustomersSelector = (state) => state.customers;
