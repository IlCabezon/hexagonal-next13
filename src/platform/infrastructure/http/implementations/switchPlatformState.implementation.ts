import { useCallback, useMemo } from "react";
import { PlatformRepository } from "../platform.repository";
import { IPlatformRepository } from "../../../domain/ports/secondary/platformRepository.interface";

export const useSwitchPlatformStateRepositoryImplementation =
  (): Partial<IPlatformRepository> => {
    const repository = useMemo(() => new PlatformRepository(), []);
 
    const switchPlatformState = useCallback(
      async (_id: string, state: Boolean) => {
        return await repository.switchPlatformState(_id, state);
      },
      [repository]
    );

    return { switchPlatformState };
  };
