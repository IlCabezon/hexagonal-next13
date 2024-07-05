"use client";
import { store } from "../config";
import { Provider } from "react-redux";
import AppRoutes from "./AppRoutes";

export default function Main() {
  return (
    <Provider store={store}>
      <AppRoutes />
    </Provider>
  );
}
