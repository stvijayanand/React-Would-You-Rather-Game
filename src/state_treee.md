{
  polls: {
    pollId: { pollId, authorId, option1, option2, isAnswered, option1SelectedCount, option2SelectedCount}, 
    pollId: { pollId, authorId, option1, option2, isAnswered, option1SelectedCount, option2SelectedCount}
  },
  users: {
    userId: {userId, userName, avatar, pollsCreatedIdsArray, submissionIdsArray},
    userId: {userId, userName, avatar, pollsCreatedIdsArray, submissionIdsArray}
  },
  submissions: {
      submissionId: { submissionId, userId, optionSelected},
      submissionId: { submissionId, userId, optionSelected}
  }
  authedUser: userId
}