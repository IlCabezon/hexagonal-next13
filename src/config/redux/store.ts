import { configureStore } from "@reduxjs/toolkit";
import menuSlice from "../../shared/infrastructure/secondary/menu-store/menuSlice";
import platformSlice from "../../platform/infrastructure/store/platformSlice";

export const store = configureStore({
  reducer: {
    menuSlice,
    platformSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
