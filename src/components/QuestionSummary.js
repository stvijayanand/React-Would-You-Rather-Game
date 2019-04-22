import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";

class QuestionSummary extends Component {
  viewPoll = (e, id) => {
    e.preventDefault();

    this.props.history.push(`/questions/${id}`);
  };

  render() {
    const { question, author } = this.props;

    if (question === null) {
      return <p>This question doesn't exist</p>;
    }

    const { id, optionOne } = question;
    let summaryText = optionOne.text.substring(0, 26);
    summaryText += "...";

    const { name, avatarURL } = author;

    return (
      <div className="question-summary">
        <div className="question-header">
          <span>
            <img src={avatarURL} alt={`Avatar of ${name}`} className="avatar" />
          </span>
          <h5>{name} asks </h5>
        </div>
        <div className="question-info">
          <div className="question-text">Would you rather?</div>
          <div className="question-view-options">
            <span>
              <div>
                <p>{summaryText}</p>
              </div>
              <div className="question-icons">
                <button
                  className="view-button"
                  onClick={e => this.viewPoll(e, id)}
                >
                  View Poll
                </button>
              </div>
            </span>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ authedUser, questions, users }, { id }) => {
  const question = questions[id];

  return {
    authedUser,
    author: users[question.author],
    question
  };
};

export default withRouter(connect(mapStateToProps)(QuestionSummary));
