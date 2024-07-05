import { useCallback, useMemo } from "react";
import { PlatformRepository } from "../platform.repository";
import { IPlatformRepository } from "../../../domain/ports/secondary/platformRepository.interface";

export const useGetPlatformByIdRepositoryImplementation =
  (): Partial<IPlatformRepository> => {
    const repository = useMemo(() => new PlatformRepository(), []);

    const getPlatformById = useCallback(
      async (_id: string) => {
        return await repository.getPlatformById(_id);
      },
      [repository]
    );

    return { getPlatformById };
  };
