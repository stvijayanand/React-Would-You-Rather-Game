export function formatQuestion(question, user, authedUser) {
  const { id, optionOne, optionTwo, timestamp } = question;
  const { name, avatarURL } = user;

  return {
    name,
    id,
    timestamp,
    optionOneText: optionOne.optionOneText,
    optionTwoText: optionTwo.optionTwoText,
    avatar: avatarURL
  };
}
