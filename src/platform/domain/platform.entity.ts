interface IPlatform {
  _id: string;
  numberPlatform: string;
  openingTime: string;
  closingTime: string;
  Ability: string;
  state: Boolean;
  deleted: Boolean;
}
export class Platform {
  _id: string;
  numberPlatform: string;
  openingTime: string;
  closingTime: string;
  Ability: string;
  state: Boolean;
  deleted: Boolean;

  constructor(platform: IPlatform) {
    this._id = platform._id;
    this.numberPlatform = platform.numberPlatform;
    this.openingTime = platform.openingTime;
    this.closingTime = platform.closingTime;
    this.Ability = platform.Ability;
    this.state = platform.state;
    this.deleted = platform.deleted;
  }

  toJSON(): IPlatform {
    return {
      _id: this._id,

      numberPlatform: this.numberPlatform,
      openingTime: this.openingTime,
      closingTime: this.closingTime,
      Ability: this.Ability,
      state: this.state,
      deleted: this.deleted,
    };
  }

  switchState(): Boolean {
    if (this.deleted)
      throw new Error("Cannot update state to deleted platform");

    this.state = !this.state;

    return this.state;
  }
}
