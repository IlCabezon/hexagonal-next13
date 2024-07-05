import {
  Platform,
  ISwitchPlatformStateUseCase,
  IPlatformStore,
  IPlatformRepository,
} from "../domain";

export class SwitchPlatformStateUseCase implements ISwitchPlatformStateUseCase {
  _repository: Partial<IPlatformRepository>;
  _store: IPlatformStore;

  constructor(repository: Partial<IPlatformRepository>, store: IPlatformStore) {
    this._repository = repository;
    this._store = store;
  }

  async switchPlatformState(_id: string): Promise<Boolean> {
    const platformFetch = await this._repository.getPlatformById!(_id);

    const platform = new Platform(platformFetch);
    this._store.setCurrentPlatform(platform.toJSON() as Platform);

    const newPlatformState = platform.switchState();
    this._store.switchPlatformState(newPlatformState);

    await this._repository.switchPlatformState!(platform._id, newPlatformState);
    return newPlatformState;
  }
}
