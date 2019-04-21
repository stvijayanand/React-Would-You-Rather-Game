import React, { Component } from "react";
import { connect } from "react-redux";
import { formatQuestion, OPTION_ONE, OPTION_TWO } from "../utils/helpers";
import { handleSaveQuestionAnswer } from "../actions/questions";

class UnansweredQuestion extends Component {
  state = {
    selectedAnswer: this.props.question.optionOneText
  };

  handleAnswerChange = e => {
    this.setState({
      selectedAnswer: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    const { selectedAnswer } = this.state;
    const { dispatch, question } = this.props;
    const { optionOneText } = question;
    let answer = "";

    if (selectedAnswer === optionOneText) {
      answer = OPTION_ONE;
    } else {
      answer = OPTION_TWO;
    }

    dispatch(handleSaveQuestionAnswer(question.id, answer));

    this.setState(() => ({
      selectedAnswer: ""
    }));
  };

  render() {
    const { question } = this.props;
    const { avatar, name, optionOneText, optionTwoText } = question;
    const { selectedAnswer } = this.state;

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
            <div className="question-text center">Would you rather...</div>

            <form className="form" onSubmit={this.handleSubmit}>
              <div>
                <div className="form-row">
                  <input
                    type="radio"
                    id="option-one"
                    name="option-name"
                    value={optionOneText}
                    checked={
                      !selectedAnswer || selectedAnswer === optionOneText
                    }
                    onChange={this.handleAnswerChange}
                  />
                  <label htmlFor="option-one">{optionOneText}</label>
                </div>
                <div className="form-row">
                  <input
                    type="radio"
                    id="option-two"
                    name="option-name"
                    value={optionTwoText}
                    checked={selectedAnswer === optionTwoText}
                    onChange={this.handleAnswerChange}
                  />
                  <label htmlFor="option-two">{optionTwoText}</label>
                </div>
              </div>
              <div className="question-view-options">
                <div className="question-icons">
                  <button className="btn-new center" type="submit">
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
  const { id } = props;

  return {
    authedUser,
    question: questions[id]
      ? formatQuestion(questions[id], users[questions[id].author], authedUser)
      : null
  };
};

export default connect(mapStateToProps)(UnansweredQuestion);
