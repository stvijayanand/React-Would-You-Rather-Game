import {
  _getUsers,
  _getQuestions,
  _saveQuestion,
  _saveQuestionAnswer
} from "./_DATA.js";

export function getInitialData() {
  return Promise.all([_getUsers(), _getQuestions()]).then(
    ([users, questions]) => ({
      users,
      questions
    })
  );
}

export function saveQuestionAPT(info) {
  return _saveQuestion(info);
}

export function saveQuestionAnswerAPI(info) {
  return _saveQuestionAnswer(info);
}
