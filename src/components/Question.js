import React, { Component } from "react";
import { connect } from "react-redux";
import UnansweredQuestion from "./UnansweredQuestion";
import AnsweredQuestion from "./AnsweredQuestion";

class Question extends Component {
  render() {
    const { id } = this.props.match.params;

    return (
      <div>
        <AnsweredQuestion id={id} />
      </div>
    );
  }
}

// const mapStateToProps = ({ authedUser, questions, users }, props) => {
//   const { id } = props.match.params;

//   return {
//     id,
//     authedUser,
//     question: questions[id]
//       ? formatQuestion(questions[id], users[questions[id].author], authedUser)
//       : null
//   };
// };

export default connect()(Question);
