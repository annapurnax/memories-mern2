import { combineReducers } from "redux";
import posts from "./posts";
import Authreducer from "./auth";
export const reducers = combineReducers({
  //object is passed
  posts,
  Authreducer, //we use all the individual reducers tht we have;   or simply ({posts:posts})
});
