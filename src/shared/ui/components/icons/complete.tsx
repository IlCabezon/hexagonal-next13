import React from "react";
import Image from "next/image";
import complete from "../images/complete.png";

export default function CompleteIcon() {
  return (
    <Image src={complete} width={75} height={75} alt="Picture of the author" />
  );
}
