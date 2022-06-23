import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { saveJwtToStorage } from "../../services/authService/authService";
import { login } from "../../services/userService/userService";
import { AppDispatch } from "../store/store";
import { IUser } from "../../models/IUser/IUser";
import { NavigateFunction } from "react-router-dom";

const slice = createSlice({
  name: "user",
  initialState: {
    userData: {},
  },
  reducers: {
    addUser: (state, { payload }: PayloadAction<IUser>) => {
      state.userData = { ...payload };
    },
  },
});

export const loginUser = (
  user: { username: string; password: string },
  navigate: NavigateFunction
) => {
  return async (dispatch: AppDispatch) => {
    try {
      const data = await login(user.username, user.password);
      const userData: IUser = {
        email: data.email,
        firstName: data.firstName,
        lastName: data.lastName,
        isAdmin: data.isAdmin,
      };
      dispatch(addUser(userData));
      saveJwtToStorage(data.token);
      navigate("/app/books");
    } catch (error) {}
  };
};

export const { addUser } = slice.actions;
export default slice.reducer;
