import React, { useEffect } from "react";
import { GetUserList } from "../../api/api";
import { useSelector } from "react-redux";
import { selectUserList } from "../../app/userSlice";
import { UserCard } from "../../components/moleculas/userCard/UserCard";
import styles from "./Users.module.scss";

export function Users() {
  const userList = useSelector(selectUserList);

  useEffect(() => {
    GetUserList();
  });

  return (
    <div className="container">
      <h2>User list:</h2>
      <div className={styles.usersContainer}>
        {userList.map((item) => {
          const { id, email, avatar, first_name, last_name } = item;
          return (
            <UserCard
              avatar={avatar}
              email={email}
              first_name={first_name}
              id={id}
              last_name={last_name}
              key={id}
            />
          );
        })}
      </div>
    </div>
  );
}
