import { useMemo, useCallback } from "react";
import { IPlatformRepository } from "../../domain/ports/secondary/platformRepository.interface";
import { IPlatformStore } from "../../domain/ports/secondary/platformStore.interface";
import { SwitchPlatformStateUseCase } from "../../application/switchState.useCase";

export const useSwitchPlatformState = (
  repository: Partial<IPlatformRepository>,
  store: IPlatformStore
) => {
  const useCase = useMemo(
    () => new SwitchPlatformStateUseCase(repository, store),
    [repository, store]
  );

  const switchPlatformState = useCallback(
    async (_id: string) => {
      return await useCase.switchPlatformState(_id);
    },
    []
  );

  return { switchPlatformState };
};
