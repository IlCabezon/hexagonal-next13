import { ICookieHandler } from "@/shared/domain/ports/secondary/cookiesHandler.interface";
import { CookiesEnum } from "@/shared/domain/cookies.enum";
import { JSCookieHandler } from "../../secondary/jsCookie";

interface IHeaders {
  Authorization: string;
  apikey: string;
}

class Http {
  headers: IHeaders;

  constructor(private cookieHandler: ICookieHandler) {
    this.headers = {
      Authorization: this.getSSOCookie(),
      apikey: this.getSSOSession(),
    };
  }

  private decodeCookie(token: string): any {
    const decodedCookie = Buffer.from(token, "base64").toString("utf-8");
    return JSON.parse(decodedCookie);
  }

  getSSOCookie(): string {
    const sessionSSO = this.cookieHandler.get(CookiesEnum.__sessionSSO);
    if (!sessionSSO) return "";

    const decodedCookie = this.decodeCookie(sessionSSO);
    const token: { ssoToken: string; ssoRefresh: string } = decodedCookie;

    return token.ssoToken;
  }

  getSSOSession(): string {
    const sessionUser = this.cookieHandler.get(CookiesEnum.__sessionUser);
    if (!sessionUser) return "";

    const decodedToken = this.decodeCookie(sessionUser);
    const token: { userToken: string; userRefresh: string } = decodedToken;

    return token.userToken;
  }

  async get<T>(url: string): Promise<T | undefined> {
    try {
      const response = await fetch(url, {
        method: "GET",
        headers: {
          ...this.headers,
        },
      });

      return response.json();
    } catch (err) {
      console.log(err);
    }
  }

  async post<T>(url: string, body: any): Promise<T> {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        ...this.headers,
      },
      body,
    });

    return response.json();
  }

  async patch<T>(url: string, body: any): Promise<T> {
    const response = await fetch(url, {
      method: "PATCH",
      headers: {
        ...this.headers,
      },
      body,
    });

    return await response.json();
  }

  async put<T>(url: string, body: any): Promise<T> {
    const response = await fetch(url, {
      method: "PATCH",
      headers: {
        ...this.headers,
      },
      body,
    });

    return await response.json();
  }

  async _delete<T>(url: string): Promise<T> {
    const response = await fetch(url, {
      method: "DELETE",
      headers: {
        ...this.headers,
      },
    });

    return await response.json();
  }
}

// auto assign dependency to be injected for simplicity
export const http = new Http(new JSCookieHandler());
