import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  IPlatformState,
  STORE_NAME,
} from "../../../platform/domain/ports/secondary/platformStore.interface";
import { Platform } from "../../../platform/domain/platform.entity";

export const initialState: IPlatformState = {
  platforms: undefined,
  currentPlatform: undefined,
};

const storeName: STORE_NAME = "platformStore";

export const platformSlice = createSlice({
  name: storeName,
  initialState,
  reducers: {
    loadPlatforms: (state, action: PayloadAction<Platform[]>) => {
      state.platforms = action.payload;
    },
    switchPlatformState: (state, action: PayloadAction<boolean>) => {
      if (!state.currentPlatform) return;
      state.currentPlatform = {
        ...state.currentPlatform,
        state: action.payload,
      };
    },
  },
});

export const { loadPlatforms, switchPlatformState } = platformSlice.actions;
export default platformSlice.reducer;
