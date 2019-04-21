export function formatQuestion(question, user, authedUser) {
  const { id, optionOne, optionTwo, timestamp } = question;
  const { name, avatarURL } = user;

  return {
    name,
    id,
    timestamp,
    optionOneText: optionOne.text,
    optionTwoText: optionTwo.text,
    avatar: avatarURL
  };
}

export const OPTION_ONE = "optionOne";
export const OPTION_TWO = "optionTwo";
