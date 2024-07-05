import { ICookieHandler } from "../../domain/ports/secondary/cookiesHandler.interface";
import Cookies from "js-cookie";

export class JSCookieHandler implements ICookieHandler {
  get(name: string): string | undefined {
    return Cookies.get(name);
  }
}
