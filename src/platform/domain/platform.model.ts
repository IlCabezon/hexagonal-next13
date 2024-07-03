// according to Martin Fowler
// this is an object model of the domain that incorporates both behaviour and data
import { Platform } from "./platform.entity";

// switch platform state
// if it's deleted it can not be switched
const switchState = (platform: Platform) => {
  const { deleted } = platform.toJSON();
  if (deleted) throw new Error("Cannot update state to deleted platform");
  return !deleted;
};

export { switchState };
