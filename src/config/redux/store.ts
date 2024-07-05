import { configureStore } from "@reduxjs/toolkit";
import menuSlice from "../../shared/infrastructure/secondary/menu-store/menuSlice";
import platformSlice from "../../platform/infrastructure/store/platformSlice";
import bookingSlice from "../../booking/infrastructure/store/bookingSlice";

export const store = configureStore({
  reducer: {
    menuSlice,
    platformSlice,
    bookingSlice
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
