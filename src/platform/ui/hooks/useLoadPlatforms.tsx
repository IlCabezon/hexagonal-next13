import { useCallback, useMemo } from "react";
import { LoadPlatformsUseCase } from "../../application/loadPlatforms.useCase";
import { ILoadPlatformsUseCase } from "../../domain/ports/primary/loadPlatform.useCase.interface";
import { ILoadPlatformsRepository } from "../../domain/ports/secondary/loadPlatform.repository.interface";
import { IPlatformStore } from "../../domain/ports/secondary/platformStore.interface";

export const useLoadPlatforms = (
  repository: ILoadPlatformsRepository,
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
