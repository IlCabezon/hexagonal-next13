// store a.k.a repository
import type { Platform } from "../../platform.entity";

type PlatformsStoreValue = Platform[] | [] | undefined;

type CurrentPlatformStoreValue = Platform | undefined;
export interface IPlatformState {
  platforms: PlatformsStoreValue;
  currentPlatform: CurrentPlatformStoreValue;
}

export type STORE_NAME = "platformStore";

// secondary port because it defines the contract for external system ( redux store )
export interface IPlatformStore {
  // state
  platforms: PlatformsStoreValue;
  currentPlatform: CurrentPlatformStoreValue;

  // actions
  loadPlatforms(platforms: Platform[]): void;
  switchPlatformState(state: boolean): void;
}
