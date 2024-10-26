import { createSlice } from "@reduxjs/toolkit";
import { EditDisco } from "../Apis/EditDisco";

export const EditDiscoSlice = createSlice({
  name: "editdiscing",
  initialState: {
    editdiscing: null,
    authenticatingeditdiscing: false,
    authenticated: false,
    isError: false,
    errors: null
  },
  reducers: {
    clearState: (state) => {
      state.editdiscing = null;
      state.isError = false;
      state.authenticated = false;
      state.authenticatingeditdiscing = false;
      return state;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(EditDisco.fulfilled, (state, action) => {
      state.editdiscing = action.payload;
      state.authenticated = false;
      state.authenticatingeditdiscing = false;
      return state;
    });
    builder.addCase(EditDisco.pending, (state, action) => {
      state.authenticatingeditdiscing = true;
      state.authenticated = true;
    });
    builder.addCase(EditDisco.rejected, (state, action) => {
      state.errors = action.errors || action.payload;
      state.authenticated = false;
      state.authenticatingeditdiscing = false;
      state.isError = true;
      return state;
    });
  }
});

export const { clearState } = EditDiscoSlice.actions;

export const EditDiscoSelector = (state) => state.editdiscing;
