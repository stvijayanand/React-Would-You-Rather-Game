import { combineReducers } from "redux";
import authedUser from "./authedUser";
import users from "./users";
import questions from "./questions";
import questionAnswers from "./questionAnswers";

export default combineReducers({
  authedUser,
  users,
  questions,
  questionAnswers
});
