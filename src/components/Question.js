import React, { Component } from "react";
import { connect } from "react-redux";
import { formatQuestion } from "../utils/helpers";

class Question extends Component {
  render() {
    const { authedUser, question } = this.props;

    return (
      <div>
        <span>{question.avatar}</span>
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
