import { useCallback, useMemo } from "react";
import { LoadPlatformsUseCase } from "../../application";
import {
  ILoadPlatformsUseCase,
  IPlatformRepository,
  IPlatformStore,
} from "../../domain";

export const useLoadPlatforms = (
  repository: Partial<IPlatformRepository>,
  store: IPlatformStore
): ILoadPlatformsUseCase => {
  const useCase = useMemo(
    () => new LoadPlatformsUseCase(repository, store),
    [repository, store]
  );

  const loadPlatforms = useCallback(
    async () => await useCase.loadPlatforms(),
    []
  );

  return { loadPlatforms };
};
