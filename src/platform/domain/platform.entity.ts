export class Platform {
  constructor(
    private numberPlatform: string,
    private openingTime: string,
    private closingTime: string,
    private Ability: string,
    private state: string,
    private deleted: boolean
  ) {}

  toJSON() {
    return {
      numberPlatform: this.numberPlatform,
      openingTime: this.openingTime,
      closingTime: this.closingTime,
      Ability: this.Ability,
      state: this.state,
      deleted: this.deleted,
    };
  }

  switchState() {
    if (this.deleted)
      throw new Error("Cannot update state to deleted platform");

    this.deleted = !this.deleted;
  }
}
