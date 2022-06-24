import http from "../httpService/httpService";
import config from "../../config.json";
import { removeFromStorage } from "../authService/authService";

export async function login(email: string, password: string) {
  const { data } = await http.post(`${config.apiUrl}/auth/login`, {
    email,
    password,
  });
  return data;
}
export function logout() {
  removeFromStorage();
}

const auth = {
  login,
  logout,
};

export default auth;
