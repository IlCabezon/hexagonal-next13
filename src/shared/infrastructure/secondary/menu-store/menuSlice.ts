import { MENU } from "../../../domain/menu.enum";
import {
  IMenuState,
  MENU_STORE_NAME,
} from "../../../domain/ports/secondary/IMenuStore.interface";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const initialState: IMenuState = {
  menu: MENU.HOME,
};

const storeName: MENU_STORE_NAME = "menuStore";

export const menuSlice = createSlice({
  name: storeName,
  initialState,
  reducers: {
    setMenu(state, newData: PayloadAction<MENU>) {
      state.menu = newData.payload;
    },
  },
});

export const { setMenu } = menuSlice.actions;
export default menuSlice.reducer;
