import React, { Component } from "react";
import { connect } from "react-redux";
import { formatQuestion } from "../utils/helpers";
import UnansweredQuestion from "./UnansweredQuestion";
import AnsweredQuestion from "./AnsweredQuestion";
import { withRouter, Redirect } from "react-router-dom";

class Question extends Component {
  render() {
    const { id, authedUser, questions, users } = this.props;

    //If not a valid question id, redirect to 404
    let question = questions[id];
    if(question){
      question = formatQuestion(questions[id], users[questions[id].author], authedUser);
    }
    else{
      question = null;
    }

    if(question === null){
      return <Redirect to="/404" />;
    }

    //if not logged in, redirect to login
    if(authedUser === null){
      return <Redirect to="/" />;
    }


    if (
      question.optionOneVotes.includes(authedUser) ||
      question.optionTwoVotes.includes(authedUser)
    ) {
      return (
        <div>
          <AnsweredQuestion id={id} />
        </div>
      );
    } else {
      return (
        <div>
          <UnansweredQuestion id={id} />
        </div>
      );
    }
  }
}

const mapStateToProps = ({ authedUser, questions, users }, props) => {
  const { question_id } = props.match.params;

  return {
    id: question_id,
    authedUser,
    questions,
    users
  };
};

export default withRouter(connect(mapStateToProps)(Question));
