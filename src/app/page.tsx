"use client";
import { store,BootstrapClient } from "../config";
import { Provider } from "react-redux";
import AppRoutes from "./AppRoutes";

export default function Main() {
  return (
    <Provider store={store}>
      <BootstrapClient />
      <AppRoutes />
    </Provider>
  );
}
