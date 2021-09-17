import { combineReducers } from "redux";
import posts from "./posts";
export const reducers = combineReducers({
  //object is passed
  posts, //we use all the individual reducers tht we have;   or simply ({posts:posts})
});
