import React, { Component } from "react";
import { connect } from "react-redux";
import UserScore from "./UserScore";
import { Redirect } from "react-router-dom";

class LeaderBoard extends Component {
  render() {
    const { authedUser } = this.props;

    if (authedUser === null) {
      return (
        <Redirect
          to={{
            pathname: "/",
            state: { referrer: this.props.location }
          }}
        />
      );
    }
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

const mapStateToProps = ({ authedUser, users }) => {
  const userScoresList = Object.values(users).map(user => {
    const questions = user.questions.length;
    const answers = Object.keys(user.answers).length;
    const score = questions + answers;

    return { userId: user.id, score };
  });

  return {
    authedUser,
    userScores: userScoresList.sort((a, b) => b.score - a.score)
  };
};

export default connect(mapStateToProps)(LeaderBoard);
