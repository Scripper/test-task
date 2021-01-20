import React, { useEffect } from "react";
import { RouteComponentProps } from "react-router";
import { GetUser } from "../../api/api";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCurrentUser,
  selectIsUserExist,
  resetUser,
} from "../../app/userSlice";
import { UserDetailedCard } from "../../components/moleculas/userDetailedCard/UserDetailedCard";

type TParams = { id: string };

export function UserDetails({ match }: RouteComponentProps<TParams>) {
  const dispatch = useDispatch();
  const userId = match.params.id;
  const { email, first_name, last_name, avatar, id } = useSelector(
    selectCurrentUser
  );
  const isUserExist = useSelector(selectIsUserExist);

  useEffect(() => {
    GetUser(userId);
  }, [userId]);

  useEffect(() => {
    return () => {
      dispatch(resetUser);
    };
  }, [dispatch]);

  return (
    <div className="container">
      {!isUserExist ? (
        <h2>
          Sorry, user with id <span>{userId}</span> does not exist ...
        </h2>
      ) : (
        <div>
          <h2>User information:</h2>
          <UserDetailedCard
            avatar={avatar}
            email={email}
            first_name={first_name}
            id={id}
            last_name={last_name}
          />
        </div>
      )}
    </div>
  );
}
