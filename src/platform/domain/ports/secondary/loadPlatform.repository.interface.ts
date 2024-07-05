import { Platform } from "../../platform.entity";

// secondary port because it defines the contract for external system ( fetching data from API )
export interface ILoadPlatformsRepository {
  loadPlatforms(): Promise<Platform[]>;
}
