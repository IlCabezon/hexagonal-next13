interface IPlatform {
  numberPlatform: string;
  openingTime: string;
  closingTime: string;
  Ability: string;
  state: boolean;
  deleted: boolean;
}
export class Platform {
  numberPlatform: string;
  openingTime: string;
  closingTime: string;
  Ability: string;
  state: boolean;
  deleted: boolean;

  constructor(platform: IPlatform) {
    this.numberPlatform = platform.numberPlatform;
    this.openingTime = platform.openingTime;
    this.closingTime = platform.closingTime;
    this.Ability = platform.Ability;
    this.state = platform.state;
    this.deleted = platform.deleted;
  }

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

    this.state = !this.state;
  }
}
