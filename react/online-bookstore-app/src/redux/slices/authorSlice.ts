import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IAuthor } from "../../models/IAuthor/IAuthor";
import { getAuthors } from "../../services/authorService/AuthorService";
import { AppDispatch } from "../store/store";

type AuthorState = {
  authorsData: IAuthor[];
};

const slice = createSlice({
  name: "user",
  initialState: {
    authorsData: [],
  },
  reducers: {
    addAuthors: (state: AuthorState, { payload }: PayloadAction<IAuthor[]>) => {
      state.authorsData = payload;
    },
  },
});

export const getAllAuthors = () => {
  return async (dispatch: AppDispatch) => {
    const data = await getAuthors();
    dispatch(addAuthors(data));
    try {
    } catch (error) {}
  };
};

export const { addAuthors } = slice.actions;
export default slice.reducer;
