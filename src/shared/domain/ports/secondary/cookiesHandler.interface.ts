import { CookiesEnum } from "../../cookies.enum";

// consider ICookieHandler as a secondary port for three main reasons:
// 1. It defines an interaction with an external system (client cookies browser) - output operation
// 2. It depends on external infrastructure
// 3. It doesn't expose domain functionality directly
export interface ICookieHandler {
  get(name: CookiesEnum): string | undefined;
}
