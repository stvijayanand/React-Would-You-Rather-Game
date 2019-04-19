import { RECEIVE_QUESTIONS, SAVE_QUESTION } from "../actions/questions";

export default function tweets(state = {}, action) {
  switch (action.type) {
    case RECEIVE_QUESTIONS:
      return {
        ...state,
        ...action.questions
      };
    case SAVE_QUESTION:
      return {
        ...state,
        [action.question.id]: action.question,
      };  
    default:
      return state;
  }
}
