import React from "react";
import Image from "next/image";
import alert from "../images/alert2.png";

export default function AlertIcon() {
  return (
    <Image src={alert} width={75} height={75} alt="Picture of the author" />
  );
}
