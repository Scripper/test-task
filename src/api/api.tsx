import axios from "axios";
import { IUser } from "../Interfaces/interfaces";
import { store } from "../app/store";
import { setUserList, setCurrentUser, setIsUserExist } from "../app/userSlice";

export const GetUserList = () => {
  return axios
    .get(`https://reqres.in/api/users`)
    .then((res) => {
      const data: IUser[] = res.data.data;
      store.dispatch(setUserList(data));
    })
    .catch((error) => {
      console.log(error, "something went wrong");
    });
};

export const GetUser = (id: string) => {
  return axios
    .get(`https://reqres.in/api/users/${id}`)
    .then((res) => {
      store.dispatch(setIsUserExist(true));
      const data: IUser = res.data.data;
      store.dispatch(setCurrentUser(data));
    })
    .catch((error) => {
      store.dispatch(setIsUserExist(false));
      console.log(error, "something went wrong");
    });
};
