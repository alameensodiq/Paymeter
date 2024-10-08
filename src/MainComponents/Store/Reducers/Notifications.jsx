import { createSlice } from "@reduxjs/toolkit";
import { Notifications } from "../Apis/Notifications";

export const NotificationsSlice = createSlice({
  name: "notifications",
  initialState: {
    notifications: null,
    authenticatingnotifications: false,
    authenticated: false,
    isError: false,
    errors: null
  },
  reducers: {
    clearState: (state) => {
      state.notifications = null;
      state.isError = false;
      state.authenticated = false;
      state.authenticatingnotifications = false;
      return state;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(Notifications.fulfilled, (state, action) => {
      state.notifications = action.payload;
      state.authenticated = false;
      state.authenticatingnotifications = false;
      return state;
    });
    builder.addCase(Notifications.pending, (state, action) => {
      state.authenticatingnotifications = true;
      state.authenticated = true;
    });
    builder.addCase(Notifications.rejected, (state, action) => {
      state.errors = action.errors || action.payload;
      state.authenticated = false;
      state.authenticatingnotifications = false;
      state.isError = true;
      return state;
    });
  }
});

export const { clearState } = NotificationsSlice.actions;

export const NotificationsSelector = (state) => state.notifications;
