import { IPlatformStorePort } from "../domain/ports/secondary/platformStore.interface";

type LoadPlatformsStore = Pick<IPlatformStorePort, "loadPlatforms">;

const loadPlatforms = async (store: LoadPlatformsStore) => {
  store.loadPlatforms();
};

export { loadPlatforms };
