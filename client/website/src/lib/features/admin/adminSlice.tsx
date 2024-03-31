"use client";

import { createSlice } from "@reduxjs/toolkit";

export interface AdminState {
  firstName: string | null;
  lastName: string | null;
  email: string | null;
  role: string | null;
  token: string | null;
}

const initialState: AdminState = {
  firstName: null,
  lastName: null,
  email: null,
  role: null,
  token: null,
};

export const adminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {
    login: (state, action) => {
      state.email = action.payload.email;
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
      state.role = action.payload.role;
      state.token = action.payload.token;
    },
    logout: (state) => {
      state.email = null;
      state.firstName = null;
      state.lastName = null;
      state.role = null;
      state.token = null;
    },
  },
});

export const { login, logout } = adminSlice.actions;

export default adminSlice.reducer;
