import { Platform } from "../../domain/platform.entity";
import { useLoadPlatformsRepositoryImplementation, useSwitchPlatformStateRepositoryImplementation } from "../../infrastructure/http";
import { usePlatformStoreImlementation } from "../../infrastructure/store/platformStore.implementation";
import { useSwitchPlatformState } from "../hooks/useSwitchPlatformState";

type Props = {
  platform: Platform;
};

export default function SwitchStateButton({ platform }: Props) {
  const switchRepositoryImplementation = useSwitchPlatformStateRepositoryImplementation();
  const loadRepositoryImplementation = useLoadPlatformsRepositoryImplementation();
  const repository = {
    ...switchRepositoryImplementation,
    ...loadRepositoryImplementation,
  }
  const store = usePlatformStoreImlementation();
  const { switchPlatformState } = useSwitchPlatformState(repository, store);

  return (
    <button onClick={() => switchPlatformState(platform._id)}>
      Switch State
    </button>
  );
}
