import { useMemo, useCallback } from "react";
import { IPlatformRepository, IPlatformStore } from "../../domain";
import { SwitchPlatformStateUseCase } from "../../application";

export const useSwitchPlatformState = (
  repository: Partial<IPlatformRepository>,
  store: IPlatformStore
) => {
  const useCase = useMemo(
    () => new SwitchPlatformStateUseCase(repository, store),
    [repository, store]
  );

  const switchPlatformState = useCallback(async (_id: string) => {
    return await useCase.switchPlatformState(_id);
  }, []);

  return { switchPlatformState };
};
