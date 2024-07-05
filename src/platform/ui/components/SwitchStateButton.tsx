import { Platform } from "../../domain";
import {
  useLoadPlatformsRepositoryImplementation,
  useSwitchPlatformStateRepositoryImplementation,
  usePlatformStoreImlementation,
} from "../../infrastructure/";
import { useSwitchPlatformState } from "../hooks";

type Props = {
  platform: Platform;
};

export default function SwitchStateButton({ platform }: Props) {
  const switchRepositoryImplementation =
    useSwitchPlatformStateRepositoryImplementation();
  const loadRepositoryImplementation =
    useLoadPlatformsRepositoryImplementation();
  const repository = {
    ...switchRepositoryImplementation,
    ...loadRepositoryImplementation,
  };
  const store = usePlatformStoreImlementation();
  const { switchPlatformState } = useSwitchPlatformState(repository, store);

  return (
    <button onClick={() => switchPlatformState(platform._id)}>
      Switch State
    </button>
  );
}
