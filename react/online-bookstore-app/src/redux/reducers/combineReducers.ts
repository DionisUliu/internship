import { combineReducers } from "redux";
import bookReducer from "../slices/bookSlice";
import userReducer from "../slices/userSlice";
import authorReducer from "../slices/authorSlice";
export default combineReducers({
  books: bookReducer,
  user: userReducer,
  authors: authorReducer,
});
