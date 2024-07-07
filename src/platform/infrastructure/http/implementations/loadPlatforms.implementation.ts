import { useCallback, useMemo } from "react";
import { PlatformRepository } from "../platform.repository";
import { IPlatformRepository } from "../../../domain";

export const useLoadPlatformsRepositoryImplementation =
  (): Partial<IPlatformRepository> => {
    const repository = useMemo(() => new PlatformRepository(), []);

    const loadPlatforms = useCallback(async () => {
      return await repository.loadPlatforms();
    }, [repository]);

    return { loadPlatforms };
  };
