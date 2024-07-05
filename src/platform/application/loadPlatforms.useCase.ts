import { Platform } from "../domain/platform.entity";
import { ILoadPlatformsUseCase } from "../domain/ports/primary/loadPlatform.useCase.interface";
import { IPlatformRepository } from "../domain/ports/secondary/platformRepository.interface";
import { IPlatformStore } from "../domain/ports/secondary/platformStore.interface";

export class LoadPlatformsUseCase implements ILoadPlatformsUseCase {
  _repository: Partial<IPlatformRepository>;
  _store: IPlatformStore;
  constructor(repository: Partial<IPlatformRepository>, store: IPlatformStore) {
    this._repository = repository;
    this._store = store;
  }

  async loadPlatforms(): Promise<Platform[]> {
    const platforms = await this._repository.loadPlatforms();

    this._store.loadPlatforms(platforms);
    return platforms;
  }
}
