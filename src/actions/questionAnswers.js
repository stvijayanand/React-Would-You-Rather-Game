import { saveQuestionAnswerAPI } from "../utils/api";
import { showLoading, hideLoading } from "react-redux-loading";

export const RECEIVE_QUESTIONANSWERS = "RECEIVE_QUESTIONANSWERS";
export const SAVE_QUESTIONANSWER = "SAVE_QUESTIONANSWER";

export function receiveQuestionAnswers(questionAnswers) {
  return {
    type: RECEIVE_QUESTIONANSWERS,
    questionAnswers
  };
}

const saveQuestionAnswer = questionAnswer => {
  return {
    type: SAVE_QUESTIONANSWER,
    questionAnswer
  };
};

export const handleSaveQuestionAnswer = (qid, answer) => {
  return (dispatch, getState) => {
    const { authedUser } = getState();

    dispatch(showLoading());

    return saveQuestionAnswerAPI({
      author: authedUser,
      qid,
      answer
    })
      .then(questionAnswer => dispatch(saveQuestionAnswer(questionAnswer)))
      .then(() => dispatch(hideLoading()));
  };
};
