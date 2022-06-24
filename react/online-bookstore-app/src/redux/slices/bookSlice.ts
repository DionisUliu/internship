import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IBook } from "../../models/IBook/IBook";
import { getBooks } from "../../services/bookService/BookService";
import { AppDispatch } from "../store/store";
type BookState = {
  booksData: IBook[];
};

const slice = createSlice({
  name: "books",
  initialState: {
    booksData: [],
  },
  reducers: {
    addAllBooks: (state: BookState, { payload }: PayloadAction<IBook[]>) => {
      state.booksData = [...payload];
    },
  },
});

export const fetchBooks = () => {
  return async (dispatch: AppDispatch) => {
    try {
      const data = await getBooks();
      dispatch(addAllBooks(data));
    } catch (error) {
      console.log(error);
    }
  };
};

export const { addAllBooks } = slice.actions;
export default slice.reducer;
