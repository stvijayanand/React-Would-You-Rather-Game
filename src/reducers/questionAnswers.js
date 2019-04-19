import {
  RECEIVE_QUESTIONANSWERS,
  SAVE_QUESTIONANSWER
} from "../actions/questionAnswers";

export default function questionAnswers(state = {}, action) {
  switch (action.type) {
    case RECEIVE_QUESTIONANSWERS:
      return {
        ...state,
        ...action.questions
      };
    case SAVE_QUESTIONANSWER:
      return {
        ...state
        //[action.question.id]: action.question,
      };
    default:
      return state;
  }
}
