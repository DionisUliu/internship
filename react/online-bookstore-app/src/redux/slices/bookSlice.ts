import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IBook } from "../../models/IBook/IBook";
import { getBooks, postBook } from "../../services/bookService/BookService";
import { AppDispatch } from "../store/store";
type BookState = {
  searchQuery: string;
  booksData: IBook[];
};

const slice = createSlice({
  name: "books",
  initialState: {
    booksData: [],
    searchQuery: "",
  },
  reducers: {
    deleteBookFromAPI: (
      state: BookState,
      { payload }: PayloadAction<string>
    ) => {
      state.booksData = state.booksData.filter(
        (book) => book.title !== payload
      );
    },
    addAllBooks: (state: BookState, { payload }: PayloadAction<IBook[]>) => {
      state.booksData = [...payload];
    },

    SearchQueryFromAPI: (
      state: BookState,
      { payload }: PayloadAction<string>
    ) => {
      state.searchQuery = payload;
    },
  },
});

export const fetchBooksFromAPI = () => {
  return async (dispatch: AppDispatch) => {
    try {
      const data = await getBooks();
      dispatch(addAllBooks(data));
    } catch (error) {
      console.log(error);
    }
  };
};

export const createNewBook = (book: IBook) => {
  return async (dispatch: AppDispatch) => {
    try {
      const data = await postBook(book);
      console.log(data);
    } catch (error) {}
  };
};

export const { deleteBookFromAPI, addAllBooks, SearchQueryFromAPI } =
  slice.actions;
export default slice.reducer;
