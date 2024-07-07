"use client";

import { useEffect } from "react";
import "../../app/styles/global.css";
import "../../app/styles/base.css";
import "../../app/styles/fonts.css";
import "bootstrap/dist/css/bootstrap.min.css";

export function BootstrapClient() {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle");
  }, []);

  return null;
}

