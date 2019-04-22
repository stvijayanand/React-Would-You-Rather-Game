import { getInitialData } from "../utils/api";
import { receiveUsers } from "../actions/users";
import { receiveQuestions } from "../actions/questions";
import { showLoading, hideLoading } from "react-redux-loading";
import { setAuthedUser } from "../actions/authedUser";

//const userId = "tylermcginnis";

export default function handleInitialData() {
  return dispatch => {
    dispatch(showLoading());
    return getInitialData().then(({ users, questions }) => {
      dispatch(receiveUsers(users));
      dispatch(receiveQuestions(questions));
      //    dispatch(setAuthedUser(userId));
      dispatch(hideLoading());
    });
  };
}
