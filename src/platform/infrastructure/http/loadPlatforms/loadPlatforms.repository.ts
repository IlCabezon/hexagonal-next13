import { Platform } from "@/platform/domain/platform.entity";
import { ILoadPlatformsRepository } from "../../../domain/ports/secondary/loadPlatform.repository.interface";
import { http } from "../../../../shared/infrastructure/primary/http/http";
import { API_PATHS } from "../../../../shared/domain/constants/apiPaths";
import { ResponseBaseDto } from "../../../../shared/infrastructure/primary/http/dto/response-base.dto.interface";

export class LoadPlatformsRepository implements ILoadPlatformsRepository {
  async loadPlatforms(): Promise<Platform[]> {
    const response = await http.get<ResponseBaseDto<Platform[]>>(
      `http://localhost:3001/${API_PATHS.PLATFORM}`
    );

    return response.data;
  }
}
