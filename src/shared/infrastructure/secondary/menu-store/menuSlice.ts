import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { MENU, IMenuState, MENU_STORE_NAME } from "../../../domain";

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
