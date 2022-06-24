import http from "../httpService/httpService";
import config from "../../config.json";
import { IBook } from "../../models/IBook/IBook";
import { getToken } from "../authService/authService";

export const getBooks = async () => {
  console.log("here", getToken());

  const { data } = await http.get(`${config.apiUrl}/books`, {
    headers: {
      Authorization: "Bearer " + getToken(),
    },
  });
  console.log(data);

  return data;
};

export const postBook = async (book: IBook) => {
  const { data } = await http.post(`${config.apiUrl}/books`, book);
  return data;
};

export const updateBook = async (book: IBook) => {
  const { data } = await http.put(`${config.apiUrl}/books`, book);
  return data;
};
