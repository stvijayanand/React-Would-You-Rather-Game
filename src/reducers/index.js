import { combineReducers } from "redux";
import authedUser from "./authedUser";
import users from "./users";
import questions from "./questions";
import { loadingBarReducer } from "react-redux-loading";
import { USER_LOGOUT } from "../actions/authedUser";

const appReducer = combineReducers({
  authedUser,
  users,
  questions,
  loadingBar: loadingBarReducer
});

const rootReducer = (state, action) => {
  if (action.type === USER_LOGOUT) {
    state = undefined
  }

  return appReducer(state, action)
}

export default rootReducer