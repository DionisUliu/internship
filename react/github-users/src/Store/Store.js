import { combineReducers, createStore } from "redux";
import { usersReducer } from "../Reducers/UsersReducer";

const reducer = combineReducers({
  users: usersReducer,
});
const store = createStore(reducer);
export { store };
