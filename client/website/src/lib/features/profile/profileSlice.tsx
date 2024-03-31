"use client";

import { createSlice } from "@reduxjs/toolkit";

export interface ProfileState {
  firstName: string | null;
  lastName: string | null;
  email: string | null;
  token: string | null;
}

const initialState: ProfileState = {
  firstName: null,
  lastName: null,
  email: null,
  token: null,
};

export const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    login: (state, action) => {
      state.email = action.payload.email;
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
      state.token = action.payload.token;
    },
    logout: (state) => {
      state.email = null;
      state.firstName = null;
      state.lastName = null;
      state.token = null;
    },
  },
});

export const { login, logout } = profileSlice.actions;

export default profileSlice.reducer;
