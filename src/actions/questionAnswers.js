import {saveQuestionAnswerAPI} from "../api"

export const RECEIVE_QUESTIONANSWERS = "RECEIVE_QUESTIONANSWERS";
export const SAVE_QUESTIONANSWER = "SAVE_QUESTIONANSWER";

export function receiveQuestionAnswers(questionAnswers) {
  return {
    type: RECEIVE_QUESTIONANSWERS,
    questionAnswers
  };
}

const saveQuestionAnswer = questionAnswer =>{
  return {
      type: SAVE_QUESTIONANSWER,
      questionAnswer
  };
}

export const handleSaveQuestionAnswer = (optionOneText, optionTwoText) =>{
  return (dispatch, getState) => {
      const {authedUser} = getState();

      return saveQuestionAnswerAPI({
                  author: authedUser,
                  optionOneText,
                  optionTwoText
              })
              .then(questionAnswer => dispatch(saveQuestionAnswer(questionAnswer)))
  }

}
