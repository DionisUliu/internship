import http from "../httpService/httpService";
import config from "../../config.json";
import { IBook } from "../../models/IBook/IBook";
import { getToken } from "../authService/authService";

const getBooks = async () => {
  const { data } = await http.get(`${config.apiUrl}/books`, {
    headers: {
      Authorization: "Bearer " + getToken(),
    },
  });
  return data;
};

const postBook = async (book: IBook) => {
  const { data } = await http.post(`${config.apiUrl}/books`, book, {
    headers: {
      Authorization: "Bearer " + getToken(),
    },
  });
  return data;
};

const updateBook = async (book: IBook) => {
  const updatedBook = { ...book };
  delete updatedBook._id;
  const { data } = await http.patch(
    `${config.apiUrl}/books/${book._id}`,
    updatedBook,
    {
      headers: {
        Authorization: "Bearer " + getToken(),
      },
    }
  );
  return data;
};

const deleteABook = async (bookId: string) => {
  const { data } = await http.delete(`${config.apiUrl}/books/${bookId}`, {
    headers: {
      Authorization: "Bearer " + getToken(),
    },
  });
  return data;
};
export { getBooks, postBook, updateBook, deleteABook };
