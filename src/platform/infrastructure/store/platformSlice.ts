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
    setCurrentPlatform: (state, action: PayloadAction<Platform>) => {
      state.currentPlatform = action.payload;
    },
    switchPlatformState: (state, action: PayloadAction<Boolean>) => {
      if (!state.currentPlatform) {
        return;
      }

      state.currentPlatform = {
        ...state.currentPlatform,
        state: action.payload,
      };
      state.platforms = state.platforms?.map((platform) =>
        platform._id === state.currentPlatform?._id
          ? { ...platform, state: action.payload }
          : platform
      );
    },
  },
});

export const { loadPlatforms, setCurrentPlatform, switchPlatformState } =
  platformSlice.actions;
export default platformSlice.reducer;
