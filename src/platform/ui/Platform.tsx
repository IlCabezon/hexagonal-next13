import { usePlatformStoreImlementation } from "../infrastructure/store/platformStore.implementation";
import { useLoadPlatformsRepositoryImplementation } from "../infrastructure/http/loadPlatforms/loadPlatforms.implementation";
import { useLoadPlatforms } from "./hooks/useLoadPlatforms";
import { useMenuStoreImplementation } from "../../shared/infrastructure/secondary/menu-store";
import { useEffect } from "react";
import { MENU } from "@/shared/domain/menu.enum";

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
          {platform.numberPlatform} - {`${platform.state}`}
        </div>
      ))}
      <GoBack />
    </div>
  );
}
