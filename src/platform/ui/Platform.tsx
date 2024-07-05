import { useEffect } from "react";
import { MENU } from "../../shared/domain";
import { useMenuStoreImplementation } from "../../shared/infrastructure";
import { useLoadPlatforms } from "./hooks";
import { SwitchStateButton } from "./components";
import { usePlatformStoreImlementation, useLoadPlatformsRepositoryImplementation } from "../infrastructure";

function GoBack() {
  const { setMenu } = useMenuStoreImplementation();
  return <button onClick={() => setMenu(MENU.HOME)}>Ir a home</button>;
}

export default function Platform() {
  const repository = useLoadPlatformsRepositoryImplementation();
  const store = usePlatformStoreImlementation();
  const { loadPlatforms } = useLoadPlatforms(repository, store);

  useEffect(() => {
    const initialize = async () => {
      await loadPlatforms();
    };
    initialize();
  }, [loadPlatforms]);

  return (
    <div>
      <h1>Platforms</h1>
      {store.platforms?.map((platform) => (
        <div key={platform.numberPlatform}>
          {platform.numberPlatform} - Estado: {`${platform.state}`}
          <SwitchStateButton platform={platform} />
        </div>
      ))}
      <GoBack />
    </div>
  );
}
