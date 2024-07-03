import { IPlatformStorePort } from "../domain/ports/secondary/platformStore.interface";

type SwitchPlatformStateStore = Pick<IPlatformStorePort, "switchPlatformState">;

const switchPlatformState = async (store: SwitchPlatformStateStore) => {
  store.switchPlatformState();
};

export { switchPlatformState };
