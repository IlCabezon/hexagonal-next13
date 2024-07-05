import { configureStore } from "@reduxjs/toolkit";
import platformSlice from "../../platform/infrastructure/store/platformSlice";

export const store = configureStore({
  reducer: {
    platformSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
