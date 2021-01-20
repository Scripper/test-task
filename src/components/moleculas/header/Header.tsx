import React from "react";
import { Navigation } from "../../atoms/navigation/Navigation";
import styles from "./Header.module.scss";

export function Header() {
  return (
    <header className={styles.header}>
      <div className="container">
        <Navigation />
      </div>
    </header>
  );
}
