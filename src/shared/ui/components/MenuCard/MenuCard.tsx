import React from "react";
import styles from "./menuCard.module.css";

export interface CardMenuProps {
  icons?: React.JSX.Element;
  title: string;
  description: string;
  buttonText: string;
  handleClick: () => void;
}

export default function MenuCard({
  icons,
  title,
  description,
  buttonText,
  handleClick,
}: CardMenuProps) {
  return (
    <div className={styles["container-card"]}>
      <div className={styles["container-card-header"]}>
        <div className={styles["container-card-header-imagen"]}>{icons}</div>
        <div className={styles["container-card-header-text"]}>{title}</div>
      </div>
      <div className={styles["container-card-description"]}>{description}</div>
      <div className={styles["container-card-button"]} onClick={handleClick}>
        <span className={styles["container-card-button-a"]}>{buttonText}</span>
      </div>
    </div>
  );
}
