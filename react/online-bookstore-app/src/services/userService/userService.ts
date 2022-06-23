import http from "../httpService/httpService";
import config from "../../config.json";

export async function login(email: string, password: string) {
  //get response and put the jwt to localStorage
  const { data } = await http.post(`${config.apiUrl}/auth/login`, {
    email,
    password,
  });
  return data;
}
export function logout() {}

const auth = {
  login,
  logout,
};

export default auth;
