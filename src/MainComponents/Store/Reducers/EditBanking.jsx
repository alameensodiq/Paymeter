import { createSlice } from "@reduxjs/toolkit";
import { EditBanking } from "../Apis/EditBanking";

export const EditBankingSlice = createSlice({
  name: "editingbank",
  initialState: {
    editingbank: null,
    authenticatingeditingbank: false,
    authenticated: false,
    isError: false,
    errors: null
  },
  reducers: {
    clearState: (state) => {
      state.editingbank = null;
      state.isError = false;
      state.authenticated = false;
      state.authenticatingeditingbank = false;
      return state;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(EditBanking.fulfilled, (state, action) => {
      state.editingbank = action.payload;
      state.authenticated = false;
      state.authenticatingeditingbank = false;
      return state;
    });
    builder.addCase(EditBanking.pending, (state, action) => {
      state.authenticatingeditingbank = true;
      state.authenticated = true;
    });
    builder.addCase(EditBanking.rejected, (state, action) => {
      state.errors = action.errors || action.payload;
      state.authenticated = false;
      state.authenticatingeditingbank = false;
      state.isError = true;
      return state;
    });
  }
});

export const { clearState } = EditBankingSlice.actions;

export const EditBankingSelector = (state) => state.editingbank;
