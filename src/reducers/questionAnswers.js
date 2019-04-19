import { RECEIVE_QUESTIONANSWERS, SAVE_QUESTIONANSWER } from "../actions/questionAnswers";

export default function tweets(state = {}, action) {
  switch (action.type) {
    case RECEIVE_QUESTIONANSWERS:
      return {
        ...state,
        ...action.questions
      };
    case SAVE_QUESTIONANSWER:
      return {
        ...state,
        //[action.question.id]: action.question,
      };  
    default:
      return state;
  }
}
