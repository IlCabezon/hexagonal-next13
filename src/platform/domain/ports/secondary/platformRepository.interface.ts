import { Platform } from "../../platform.entity";

export interface IPlatformRepository {
  loadPlatforms(signal?: AbortSignal): Promise<Platform[]>;
  getPlatformById(_id: string): Promise<Platform>;
  switchPlatformState(_id: string, state: Boolean): Promise<void>;
}
