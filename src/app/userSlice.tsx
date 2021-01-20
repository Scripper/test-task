import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { IUser } from "../Interfaces/interfaces";

interface userState {
  userList: IUser[];
  currentUser: IUser;
  isUserExist: boolean;
}

const initialState: userState = {
  userList: [],
  currentUser: {
    avatar: "",
    email: "",
    first_name: "",
    id: 0,
    last_name: "",
  },
  isUserExist: true,
};

export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setUserList: (state, action: PayloadAction<IUser[]>) => {
      state.userList = action.payload;
    },
    setCurrentUser: (state, action: PayloadAction<IUser>) => {
      state.currentUser = action.payload;
    },
    setIsUserExist: (state, action: PayloadAction<boolean>) => {
      state.isUserExist = action.payload;
    },
    resetUser: (state) => {
      state.currentUser = {
        avatar: "",
        email: "",
        first_name: "",
        id: 0,
        last_name: "",
      };
    },
  },
});

//export method
export const {
  setUserList,
  setCurrentUser,
  setIsUserExist,
  resetUser,
} = userSlice.actions;

//getter
export const selectUserList = (state: RootState) => state.users.userList;
export const selectCurrentUser = (state: RootState) => state.users.currentUser;
export const selectIsUserExist = (state: RootState) => state.users.isUserExist;

export default userSlice.reducer;
