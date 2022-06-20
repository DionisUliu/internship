import { PayloadAction } from "@reduxjs/toolkit";
import { FETCH_USERS } from "../Components/UserListView/UserListView";
import { IUser } from "../Interfaces/IUsers";
export const usersReducer = (
  state: IUser[] = [],
  action: PayloadAction<IUser[]>
) => {
  switch (action.type) {
    case FETCH_USERS:
      return [...state, ...action.payload];
  }

  return [...state];
};
