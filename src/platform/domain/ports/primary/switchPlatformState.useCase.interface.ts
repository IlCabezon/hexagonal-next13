export interface ISwitchPlatformStateUseCase {
  switchPlatformState(_id: string, state: Boolean): Promise<Boolean>;
}
