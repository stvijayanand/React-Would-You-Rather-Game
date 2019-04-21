import React, { Component } from "react";
import { connect } from "react-redux";
import UserScore from "./UserScore";

class LeaderBoard extends Component {
  render() {
    const { userScores } = this.props;

    return (
      <div>
        <ul>
          {userScores.map(userScore => (
            <UserScore key={userScore.userId} id={userScore.userId} />
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = ({ users }) => {
  const userScoresList = Object.values(users).map(user => {
    const questions = user.questions.length;
    const answers = Object.keys(user.answers).length;
    const score = questions + answers;

    return { userId: user.id, score };
  });

  return {
    userScores: userScoresList.sort((a, b) => b.score - a.score)
  };
};

export default connect(mapStateToProps)(LeaderBoard);
