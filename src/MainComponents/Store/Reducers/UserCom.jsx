import { createSlice } from "@reduxjs/toolkit";
import { UserCom } from "../Apis/UserCom";

export const UserComSlice = createSlice({
  name: "usercom",
  initialState: {
    usercom: null,
    authenticatingusercom: false,
    authenticated: false,
    isError: false,
    errors: null
  },
  reducers: {
    clearState: (state) => {
      state.usercom = null;
      state.isError = false;
      state.authenticated = false;
      state.authenticatingusercom = false;
      return state;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(UserCom.fulfilled, (state, action) => {
      state.usercom = action.payload;
      state.authenticated = false;
      state.authenticatingusercom = false;
      return state;
    });
    builder.addCase(UserCom.pending, (state, action) => {
      state.authenticatingusercom = true;
      state.authenticated = true;
    });
    builder.addCase(UserCom.rejected, (state, action) => {
      state.errors = action.errors || action.payload;
      state.authenticated = false;
      state.authenticatingusercom = false;
      state.isError = true;
      return state;
    });
  }
});

export const { clearState } = UserComSlice.actions;

export const UserComSelector = (state) => state.usercom;
