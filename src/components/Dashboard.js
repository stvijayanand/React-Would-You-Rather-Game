import React, { Component } from "react";
import { connect } from "react-redux";
import QuestionSummary from "./QuestionSummary";

const UNANSWERED_POLLS = "Unanswered Polls";
const ANSWERED_POLLS = "Answered Polls";

class Dashboard extends Component {
  state = {
    selectedOption: UNANSWERED_POLLS
  };

  handleOptionChange = e => {
    this.setState({
      selectedOption: e.target.value
    });
  };

  render() {
    const { unansweredQuestionIds, answeredQuestionIds } = this.props;
    const { selectedOption } = this.state;

    let questionIds = [];
    if (selectedOption === UNANSWERED_POLLS) {
      questionIds = unansweredQuestionIds;
    } else {
      questionIds = answeredQuestionIds;
    }

    return (
      <div>
        <div>
          <h3 className="center">Polls</h3>
        </div>
        <div className="center">
          <span>
            <input
              type="radio"
              id="unanswered-id"
              name="poll-type"
              value={UNANSWERED_POLLS}
              checked={selectedOption === UNANSWERED_POLLS}
              onChange={this.handleOptionChange}
            />
            <label for="unanswered-id">Unanswered Polls</label>
          </span>
          <span>
            <input
              type="radio"
              id="answered-id"
              name="poll-type"
              value={ANSWERED_POLLS}
              checked={selectedOption === ANSWERED_POLLS}
              onChange={this.handleOptionChange}
            />
            <label for="answered-id">Answered Polls</label>
          </span>
        </div>
        <div>
          <ul className="dashboard-list">
            {questionIds.map(id => (
              <li key={id}>
                <QuestionSummary id={id} />
              </li>
            ))}
          </ul>
        </div>
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
