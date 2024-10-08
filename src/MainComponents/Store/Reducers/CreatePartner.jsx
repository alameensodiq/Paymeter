import { createSlice } from "@reduxjs/toolkit";
import { CreatePartner } from "../Apis/CreatePartner";

export const CreatePartnerSlice = createSlice({
  name: "createpartner",
  initialState: {
    createpartner: null,
    authenticatingcreatepartner: false,
    authenticated: false,
    isError: false,
    errors: null
  },
  reducers: {
    clearState: (state) => {
      state.createpartner = null;
      state.isError = false;
      state.authenticated = false;
      state.authenticatingcreatepartner = false;
      return state;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(CreatePartner.fulfilled, (state, action) => {
      state.createpartner = action.payload;
      state.authenticated = false;
      state.authenticatingcreatepartner = false;
      return state;
    });
    builder.addCase(CreatePartner.pending, (state, action) => {
      state.authenticatingcreatepartner = true;
      state.authenticated = true;
    });
    builder.addCase(CreatePartner.rejected, (state, action) => {
      state.errors = action.errors || action.payload;
      state.authenticated = false;
      state.authenticatingcreatepartner = false;
      state.isError = true;
      return state;
    });
  }
});

export const { clearState } = CreatePartnerSlice.actions;

export const CreatePartnerSelector = (state) => state.createpartner;
