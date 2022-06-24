import { IUser } from "../../models/IUser/IUser";

export const saveJwtToStorage = (jwt: string) => {
  localStorage.setItem("token", jwt);
};

export const getToken = () => {
  return localStorage.getItem("token");
};

export const saveUserToStorage = (user: IUser) => {
  localStorage.setItem("user", JSON.stringify(user));
};

export const getUser = () => {
  return JSON.parse(localStorage.getItem("user") || "{}");
};
export const removeFromStorage = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
};
