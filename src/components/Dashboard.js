import React, { Component } from "react";
import { connect } from "react-redux";
import QuestionSummary from "./QuestionSummary";

class Dashboard extends Component {
  render() {
    return (
      <div>
        <h3 className="center">Polls</h3>
        <ul className="dashboard-list">
          {this.props.unansweredQuestionIds.map(id => (
            <li key={id}>
              <QuestionSummary id={id} />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = ({ questions, authedUser }) => {
  const unansweredQuestions = Object.values(questions).filter(
    q =>
      !q.optionOne.votes.includes(authedUser) &&
      !q.optionTwo.votes.includes(authedUser)
  );

  const answeredQuestions = Object.values(questions).filter(
    q =>
      q.optionOne.votes.includes(authedUser) ||
      q.optionTwo.votes.includes(authedUser)
  );

  return {
    unansweredQuestionIds: unansweredQuestions
      .map(uq => uq.id)
      .sort((a, b) => questions[b].timestamp - questions[a].timestamp),
    answeredQuestionIds: answeredQuestions
      .map(aq => aq.id)
      .sort((a, b) => questions[b].timestamp - questions[a].timestamp)
  };
};

export default connect(mapStateToProps)(Dashboard);
