"use client";

import { createSlice } from "@reduxjs/toolkit";

export interface ProfilePageState {
  page : string
}

const initialState: ProfilePageState = {
  page: "General"
};

export const profilePageSlice = createSlice({
  name: "profilePage",
  initialState,
  reducers: {
    setPage: (state, action) => {
        state.page = action.payload
    }
  },
});

export const { setPage } = profilePageSlice.actions;

export default profilePageSlice.reducer;
