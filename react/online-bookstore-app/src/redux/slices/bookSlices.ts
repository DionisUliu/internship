import { createSlice } from "@reduxjs/toolkit";
type BookState = {
  books: {
    name: string;
  }[];
};
// type Payload={

// }

const slice = createSlice({
  name: "books",
  initialState: {
    books: [],
  },
  reducers: {
    getAllBooks: (state: BookState, { payload }: any) => {
      state.books = [...payload];
    },
  },
});

export const { getAllBooks } = slice.actions;
export default slice.reducer;
