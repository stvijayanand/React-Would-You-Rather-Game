import {saveQuestions, saveQuestionAnswers} from "../api"

export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";
export const SAVE_QUESTION = "SAVE_QUESTION";
export const SAVE_QUESTIONANSWER = "SAVE_QUESTIONANSWER";

export function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions
  };
}

const saveQuestion = question =>{
  return {
      type: SAVE_QUESTION,
      question
  };
}

export const handleSaveQuestion = (optionOneText, optionTwoText) =>{
  return (dispatch, getState) => {
      const {authedUser} = getState();

      return saveQuestion({
                  author: authedUser,
                  optionOneText,
                  optionTwoText
              })
              .then(question => dispatch(saveQuestion(question)))
  }

}
