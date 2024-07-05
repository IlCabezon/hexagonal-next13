import { useCallback, useMemo } from "react";
import { PlatformRepository } from "../platform.repository";
import { IPlatformRepository } from "../../../domain/ports/secondary/platformRepository.interface";

export const useLoadPlatformsRepositoryImplementation =
  (): IPlatformRepository => {
    const repository = useMemo(() => new PlatformRepository(), []);

    const loadPlatforms = useCallback(async () => {
      return await repository.loadPlatforms();
    }, [repository]);

    const getPlatformById = useCallback(
      async (_id: string) => {
        return await repository.getPlatformById(_id);
      },
      [repository]
    );

    const switchPlatformState = useCallback(
      async (_id: string, state: Boolean) => {
        return await repository.switchPlatformState(_id, state);
      },
      [repository]
    );

    return { loadPlatforms, getPlatformById, switchPlatformState };
  };
