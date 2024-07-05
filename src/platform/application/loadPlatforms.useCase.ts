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

  async loadPlatforms(): Promise<Platform[]> {
    const platforms = await this._repository.loadPlatforms!();

    this._store.loadPlatforms(platforms);
    return platforms;
  }
}
