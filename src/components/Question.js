import React, { Component } from "react";
import { connect } from "react-redux";
import { formatQuestion } from "../utils/helpers";

class Question extends Component {
  state = {
    selectedOption: ""
  };

  handleOptionChange = e => {};

  render() {
    const { authedUser, question } = this.props;
    const { avatar, name, optionOneText, optionTwoText } = question;
    const { selectedOption } = this.state;

    return (
      <div>
        <div className="question-container">
          <div className="question-header">
            <span>
              <img src={avatar} alt={`Avatar of ${name}`} className="avatar" />
            </span>
            <h5>{name} asks </h5>
          </div>

          <div className="question-body">
            <div className="question-text center">Would you rather?</div>

            <form className="form" onSubmit={this.handleSubmit}>
              <div>
                <div className="form-row">
                  <input
                    type="radio"
                    id="unanswered-id"
                    name="poll-type"
                    value={optionOneText}
                    checked={selectedOption === optionOneText}
                    onChange={this.handleOptionChange}
                  />
                  <label for="unanswered-id">{optionOneText}</label>
                </div>
                <div className="form-row">
                  <input
                    type="radio"
                    id="answered-id"
                    name="poll-type"
                    value={optionTwoText}
                    checked={selectedOption === optionTwoText}
                    onChange={this.handleOptionChange}
                  />
                  <label for="answered-id">{optionTwoText}</label>
                </div>
              </div>
              <div className="question-view-options">
                <div className="question-icons">
                  <button className="btn-new center" onClick={this.viewPoll}>
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ authedUser, questions, users }, props) => {
  const { id } = props.match.params;

  return {
    authedUser,
    question: questions[id]
      ? formatQuestion(questions[id], users[questions[id].author], authedUser)
      : null
  };
};

export default connect(mapStateToProps)(Question);
