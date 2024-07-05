import React, { useCallback } from "react";
import { IMenuStore } from "@/shared/domain/ports/secondary/IMenuStore.interface";
import { RootState, useAppDispatch, useAppSelector } from "../../../../config";
import { menuSlice } from "./menuSlice";
import { MENU } from "@/shared/domain/menu.enum";

const menuSelector = (state: RootState) => state.menuSlice;
const { setMenu: setMenuAction } = menuSlice.actions;

export const useMenuStoreImplementation = (): IMenuStore => {
  const { menu } = useAppSelector(menuSelector);
  const dispatch = useAppDispatch();

  const setMenu = useCallback(
    (menu: MENU) => {
      dispatch(setMenuAction(menu));
    },
    [dispatch]
  );

  return { menu, setMenu };
};
