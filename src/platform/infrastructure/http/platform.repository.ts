import {
  http,
  ResponseBaseDto,
} from "../../../shared/infrastructure/primary/http";
import { Platform } from "../../../platform/domain/platform.entity";
import { IPlatformRepository } from "../../../platform/domain/ports/secondary/platformRepository.interface";
import { API_PATHS } from "../../../shared/domain/constants/apiPaths";
import { SwitchPlatformStateDto } from "./dto/switchPlatformState-request.dto";

export class PlatformRepository implements IPlatformRepository {
  async loadPlatforms(): Promise<Platform[]> {
    const response = await http.get<ResponseBaseDto<Platform[]>>(
      `http://localhost:3001/${API_PATHS.PLATFORM}`
    );

    if (!response?.data) {
      throw new Error("Platform not found"); // TODO - error handling
    }

    return response.data;
  }

  async getPlatformById(_id: string): Promise<Platform> {
    const response = await http.get<ResponseBaseDto<Platform>>(
      `http://localhost:3001/${API_PATHS.PLATFORM}/${_id}`
    );

    if (!response?.data) {
      throw new Error("Platform not found"); // TODO - error handling
    }

    return response.data;
  }

  async switchPlatformState(_id: string, state: Boolean): Promise<void> {
    const body: SwitchPlatformStateDto = {
      state,
    };
    await http.patch<ResponseBaseDto<undefined>, SwitchPlatformStateDto>(
      `http://localhost:3001/${API_PATHS.SWITCH_PLATFORM_STATE}/${_id}`,
      body
    );
  }
}
