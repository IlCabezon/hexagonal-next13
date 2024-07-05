import Cookies from "js-cookie";
import { ICookieHandler } from "../../domain";

export class JSCookieHandler implements ICookieHandler {
  get(name: string): string | undefined {
    return Cookies.get(name);
  }
}
