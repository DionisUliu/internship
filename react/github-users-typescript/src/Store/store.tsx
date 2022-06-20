import { combineReducers, createStore } from "redux";
import { usersReducer } from "../Reducer/UsersReducer";

const reducer = combineReducers({
  users: usersReducer,
});
const store = createStore(reducer);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export { store };
