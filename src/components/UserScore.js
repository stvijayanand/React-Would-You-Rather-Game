import React, { Component } from "react";
import { connect } from "react-redux";

class UserScore extends Component {
  render() {
    const { user } = this.props;
    const questions = user.questions.length;
    const answers = Object.keys(user.answers).length;

    return (
      <div>
        <div className="question-container">
          <div className="question-header">
            <span>
              <img
                src={user.avatarURL}
                alt={`Avatar of ${user.name}`}
                className="avatar"
              />
            </span>
            <h5>{user.name} </h5>
          </div>

          <div className="question-body">
            <div className="question-body-row">
              <div className="question-text center">
                Score
                <span className="circle">{questions + answers}</span>
              </div>
            </div>
            <div className="question-body-row">
              <div className="question-text center">
                Questions asked: {questions}
              </div>
            </div>
            <div className="question-body-row">
              <div className="question-text center">
                Questions answered: {answers}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ users }, { id }) => {
  return {
    user: users[id]
  };
};

export default connect(mapStateToProps)(UserScore);
