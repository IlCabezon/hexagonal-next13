import {
  Platform,
  ILoadPlatformsUseCase,
  IPlatformRepository,
  IPlatformStore,
} from "../domain";

export class LoadPlatformsUseCase implements ILoadPlatformsUseCase {
  _repository: Partial<IPlatformRepository>;
  _store: IPlatformStore;
  constructor(repository: Partial<IPlatformRepository>, store: IPlatformStore) {
    this._repository = repository;
    this._store = store;
  }

  async loadPlatforms(signal?: AbortSignal): Promise<Platform[]> {
    const platforms = await this._repository.loadPlatforms!(signal);

    this._store.loadPlatforms(platforms);
    return platforms;
  }
}
