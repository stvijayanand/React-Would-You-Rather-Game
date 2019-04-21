import React, { Component } from "react";
import { connect } from "react-redux";
import { formatQuestion } from "../utils/helpers";

class AnsweredQuestion extends Component {
  render() {
    const { question } = this.props;

    const {
      avatar,
      name,
      optionOneText,
      optionTwoText,
      optionOneVotes,
      optionTwoVotes
    } = question;

    return <div />;
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

export default connect(mapStateToProps)(AnsweredQuestion);
