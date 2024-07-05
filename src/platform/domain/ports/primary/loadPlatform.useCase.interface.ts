import { Platform } from "../../platform.entity";

// primary port because expose the domain funcionality to the application layer wich will be used by the UI ( external world )
export interface ILoadPlatformsUseCase {
  loadPlatforms(): Promise<Platform[]>;
}
