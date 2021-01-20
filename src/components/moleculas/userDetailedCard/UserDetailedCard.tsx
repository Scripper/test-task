import React from "react";
import { IUser } from "../../../Interfaces/interfaces";
import style from "./UserDetailedCard.module.scss";

export function UserDetailedCard({
  avatar,
  first_name,
  last_name,
  id,
  email,
}: IUser) {
  return (
    <div className={style.user}>
      <div className="img-container">
        <img src={avatar} alt={`${first_name} ${last_name}`} />
      </div>
      <div className={style.userInfo}>
        <ul>
          <li>
            <span>First name:</span> {first_name}
          </li>
          <li>
            <span>Last name:</span> {last_name}
          </li>
          <li>
            <span>Email:</span> {email}
          </li>
          <li>
            <span>Id:</span> {id}
          </li>
        </ul>
      </div>
    </div>
  );
}
