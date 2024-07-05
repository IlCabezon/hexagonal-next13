import { MENU } from "../../menu.enum";

export interface IMenuState {
  menu: MENU;
}

export type MENU_STORE_NAME = "menuStore";

export interface IMenuStore {
  // state
  menu: MENU;

  // actions
  setMenu(name: string): void;
}
