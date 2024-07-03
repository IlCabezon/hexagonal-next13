// store a.k.a repository
import type { Platform } from "../../platform.entity";

export interface IPlatformStorePort {
  // state
  platforms: Platform[] | undefined;
  isLoading: boolean | undefined;

  // actions
  loadPlatforms(): Promise<void>;
  switchPlatformState(): void;
}
