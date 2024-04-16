import { combineReducers } from "redux";
import todoSlice from "./todoSlice";

export const rootReducer = combineReducers({
  todo: todoSlice,
});
