import { Platform } from "../domain/platform.entity";
import { ILoadPlatformsUseCase } from "../domain/ports/primary/loadPlatform.useCase.interface";
import { ILoadPlatformsRepository } from "../domain/ports/secondary/loadPlatform.repository.interface";
import { IPlatformStore } from "../domain/ports/secondary/platformStore.interface";

export class LoadPlatformsUseCase implements ILoadPlatformsUseCase {
  _repository: ILoadPlatformsRepository;
  _store: IPlatformStore;
  constructor(repository: ILoadPlatformsRepository, store: IPlatformStore) {
    this._repository = repository;
    this._store = store;
  }

  async loadPlatforms(): Promise<Platform[]> {
    const platforms = await this._repository.loadPlatforms();

    this._store.loadPlatforms(platforms);
    return platforms;
  }
}
