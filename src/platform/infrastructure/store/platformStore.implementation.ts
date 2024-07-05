import { useCallback } from "react";
import { RootState, useAppDispatch, useAppSelector } from "../../../config";
import { Platform } from "@/platform/domain/platform.entity";
import { platformSlice } from "./platformSlice";
import { IPlatformStore } from "@/platform/domain/ports/secondary/platformStore.interface";

const platformSelector = (state: RootState) => state.platformSlice;
const { loadPlatforms: loadPlatformAction } = platformSlice.actions;

export const usePlatformStoreImlementation = (): IPlatformStore => {
  const dispatch = useAppDispatch();
  const { platforms, currentPlatform } = useAppSelector(platformSelector);

  const loadPlatforms = useCallback(
    (platforms: Platform[]) => {
      dispatch(loadPlatformAction(platforms) as any);
    },
    [dispatch]
  );

  const switchPlatformState = useCallback(
    (state: Boolean) => {
      dispatch(switchPlatformState(state) as any);
    },
    [dispatch]
  );

  return { platforms, currentPlatform, loadPlatforms, switchPlatformState };
};
