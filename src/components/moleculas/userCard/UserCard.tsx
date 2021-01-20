import React from "react";
import { IUser } from "../../../Interfaces/interfaces";
import { Link } from "react-router-dom";
import styles from "./UserCard.module.scss";

export function UserCard({ avatar, first_name, last_name, id }: IUser) {
  return (
    <div className={styles.container}>
      <Link to={`/users/${id}`} className="img-container">
        <img src={avatar} alt={`${first_name} ${last_name}`} />
      </Link>
      <div className={styles.containerInfo}>
        <span>
          {first_name} {last_name}
        </span>
      </div>
    </div>
  );
}
