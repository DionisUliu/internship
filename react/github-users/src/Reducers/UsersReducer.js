import { FETCH_USERS } from "../Components/UserListView/UserListView";

export const usersReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_USERS:
      return [...state, ...action.payload];
  }

  return [...state];
};
