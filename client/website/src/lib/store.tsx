import { configureStore } from "@reduxjs/toolkit";
import profileSlice from "./features/profile/profileSlice";
import adminSlice from "./features/admin/adminSlice";
import profilePageSlice from "./features/profile/profilePageSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      profile: profileSlice,
      admin: adminSlice,
      profilePage: profilePageSlice,
    },
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
