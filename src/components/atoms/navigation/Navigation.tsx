import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navigation.module.scss";

interface INavigation {
  name: string;
  link: string;
}

export function Navigation() {
  const navigationList: INavigation[] = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "User list",
      link: "/users",
    },
  ];

  return (
    <ul className={styles.navigation}>
      {navigationList.map(({ name, link }) => {
        return (
          <li key={link}>
            <Link to={link}>{name}</Link>
          </li>
        );
      })}
    </ul>
  );
}
