import React, { Component } from "react";
import { connect } from "react-redux";
import { formatQuestion } from "../utils/helpers";
import UnansweredQuestion from "./UnansweredQuestion";

class Question extends Component {
  render() {
    const { id } = this.props;

    return (
      <div>
        <UnansweredQuestion id={id} />
      </div>
    );
  }
}

const mapStateToProps = ({ authedUser, questions, users }, props) => {
  const { id } = props.match.params;

  return {
    id,
    authedUser,
    question: questions[id]
      ? formatQuestion(questions[id], users[questions[id].author], authedUser)
      : null
  };
};

export default connect(mapStateToProps)(Question);
