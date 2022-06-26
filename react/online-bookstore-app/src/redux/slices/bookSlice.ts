import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { IBook } from "../../models/IBook/IBook";
import {
  deleteABook,
  getBooks,
  postBook,
  updateBook,
} from "../../services/bookService/BookService";
import { AppDispatch } from "../store/store";
type BookState = {
  booksData: IBook[];
  searchQuery: string;
  editableBook?: IBook | {};
};

interface IDeleteBook extends IBook {
  _id: string;
}

const slice = createSlice({
  name: "books",
  initialState: {
    booksData: [],
    searchQuery: "",
    editableBook: {} as IBook,
  },
  reducers: {
    addAllBooks: (state: BookState, { payload }: PayloadAction<IBook[]>) => {
      state.booksData = [...payload];
    },
    deleteMyBook: (state: BookState, { payload }: PayloadAction<string>) => {
      state.booksData = state.booksData.filter((book) => book._id !== payload);
    },
    updateMyBook: (state: BookState, { payload }: PayloadAction<IBook>) => {
      state.booksData = state.booksData.map((book) => {
        if (book._id === payload._id) {
          let dateString = payload.publications[0] as string;
          const date = new Date(dateString).toISOString();
          payload.publications = [{ date: date }];
          book = { ...payload };
        }
        return book;
      });
    },
    addBook: (state: BookState, { payload }: PayloadAction<IBook>) => {
      let dateString = payload.publications[0] as string;
      const date = new Date(dateString).toISOString();
      payload.publications = [{ date: date }];
      state.booksData = [...state.booksData, payload];
    },
    addSearchQuery: (state: BookState, { payload }: PayloadAction<string>) => {
      state.searchQuery = payload;
    },
    deleteEditableBook: (state: BookState) => {
      state.editableBook = {};
    },
    setEditableBook: (state: BookState, { payload }: PayloadAction<IBook>) => {
      state.editableBook = payload;
    },
  },
});

export const fetchBooks = () => {
  return async (dispatch: AppDispatch) => {
    try {
      const data = await getBooks();
      dispatch(addAllBooks(data));
    } catch (error) {}
  };
};

export const createNewBook = (book: IBook) => {
  return async (dispatch: AppDispatch) => {
    try {
      await postBook(book);
      dispatch(addBook(book));
      toast.success("Successfully created book!");
    } catch (error) {}
  };
};

export const deleteBook = (book: IDeleteBook) => {
  return async (dispatch: AppDispatch) => {
    try {
      await deleteABook(book._id);
      dispatch(deleteMyBook(book._id));
    } catch (error) {
      dispatch(createNewBook(book));
    }
  };
};

export const updateTheBook = (book: IBook) => {
  return async (dispatch: AppDispatch) => {
    try {
      await updateBook(book);
      dispatch(updateMyBook(book));
      toast.success("Successfully updated book!");
    } catch (error) {}
  };
};
export const {
  addAllBooks,
  addSearchQuery,
  deleteMyBook,
  setEditableBook,
  deleteEditableBook,
  updateMyBook,
  addBook,
} = slice.actions;
export default slice.reducer;
