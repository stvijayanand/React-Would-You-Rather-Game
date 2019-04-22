import React, { Component } from "react";
import { connect } from "react-redux";
import { formatQuestion } from "../utils/helpers";
import UnansweredQuestion from "./UnansweredQuestion";
import AnsweredQuestion from "./AnsweredQuestion";
import { withRouter, Redirect } from "react-router-dom";

class Question extends Component {
  // componentWillMount(){
  //   const {authedUser} = this.props; 

  //   if(authedUser === null){
  //     this.props.history.push('/');
  //    }
  // }

  render() {
    const { id, authedUser, question } = this.props;
    
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
  const { id } = props.match.params;

  return {
    id,
    authedUser,
    question: questions[id]
      ? formatQuestion(questions[id], users[questions[id].author], authedUser)
      : null
  };
};

export default withRouter(connect(mapStateToProps)(Question));
