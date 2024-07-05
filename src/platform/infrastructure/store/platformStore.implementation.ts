import { useCallback } from "react";
import { RootState, useAppDispatch, useAppSelector } from "../../../config";
import { Platform } from "../../domain/platform.entity";
import { platformSlice } from "./platformSlice";
import { IPlatformStore } from "../../domain/ports/secondary/platformStore.interface";

const platformSelector = (state: RootState) => state.platformSlice;
const {
  loadPlatforms: loadPlatformAction,
  setCurrentPlatform: setCurrenPlatformAction,
  switchPlatformState: SwitchPlatformStateAction,
} = platformSlice.actions;

export const usePlatformStoreImlementation = (): IPlatformStore => {
  const dispatch = useAppDispatch();
  const { platforms, currentPlatform } = useAppSelector(platformSelector);

  const loadPlatforms = useCallback(
    (platforms: Platform[]) => {
      dispatch(loadPlatformAction(platforms));
    },
    [dispatch]
  );

  const setCurrentPlatform = useCallback(
    (platform: Platform) => {
      dispatch(setCurrenPlatformAction(platform));
    },
    [dispatch]
  );

  const switchPlatformState = useCallback(
    (state: Boolean) => {
      dispatch(SwitchPlatformStateAction(state));
    },
    [dispatch]
  );

  return {
    platforms,
    currentPlatform,
    loadPlatforms,
    switchPlatformState,
    setCurrentPlatform,
  };
};
