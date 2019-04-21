import { saveQuestionAPT, saveQuestionAnswerAPI } from "../utils/api";
import { showLoading, hideLoading } from "react-redux-loading";

export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";
export const SAVE_QUESTION = "SAVE_QUESTION";
export const SAVE_QUESTIONANSWER = "SAVE_QUESTIONANSWER";

export function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions
  };
}

const saveQuestionAnswer = ({ authedUser, qid, answer }) => {
  return {
    type: SAVE_QUESTIONANSWER,
    authedUser,
    qid,
    answer
  };
};

export const handleSaveQuestionAnswer = (qid, answer) => {
  return (dispatch, getState) => {
    const { authedUser } = getState();

    dispatch(showLoading());

    return saveQuestionAnswerAPI({
      authedUser,
      qid,
      answer
    })
      .then(() => {
        dispatch(saveQuestionAnswer({ authedUser, qid, answer }));
      })
      .then(() => dispatch(hideLoading()));
  };
};

const saveQuestion = question => {
  return {
    type: SAVE_QUESTION,
    question
  };
};

export const handleSaveQuestion = (optionOneText, optionTwoText) => {
  return (dispatch, getState) => {
    const { authedUser } = getState();

    dispatch(showLoading());

    return saveQuestionAPT({
      author: authedUser,
      optionOneText,
      optionTwoText
    })
      .then(question => dispatch(saveQuestion(question)))
      .then(() => dispatch(hideLoading()));
  };
};
