export const RECEIVE_QUESTIONANSWERS = "RECEIVE_QUESTIONANSWERS";

export function receiveQuestionAnswers(questionAnswers) {
  return {
    type: RECEIVE_QUESTIONANSWERS,
    questionAnswers
  };
}
