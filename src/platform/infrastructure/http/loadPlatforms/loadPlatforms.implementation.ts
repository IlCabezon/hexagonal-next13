import React, { useCallback, useMemo } from "react";
import { LoadPlatformsRepository } from "./loadPlatforms.repository";
import { ILoadPlatformsRepository } from "@/platform/domain/ports/secondary/loadPlatform.repository.interface";
 
export const useLoadPlatformsRepositoryImplementation = (): ILoadPlatformsRepository => {
  const repository = useMemo(() => new LoadPlatformsRepository(), []);

  const loadPlatforms = useCallback(async () => {
    return await repository.loadPlatforms();
  }, [repository]);

  return { loadPlatforms };
};
