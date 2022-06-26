import http from "../httpService/httpService";
import config from "../../config.json";
import { getToken } from "../authService/authService";

export const getAuthors = async () => {
  const { data } = await http.get(`${config.apiUrl}/authors`, {
    headers: {
      Authorization: "Bearer " + getToken(),
    },
  });

  return data;
};
