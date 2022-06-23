import { combineReducers } from "redux";
import bookReducer from "../slices/bookSlice";
import userReducer from "../slices/userSlice";
export default combineReducers({
  books: bookReducer,
  user: userReducer,
});
