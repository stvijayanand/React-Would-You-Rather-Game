import React, { Component } from "react";
import { connect } from "react-redux";
import { formatQuestion } from "../utils/helpers";
import ProgressBar from "react-bootstrap/ProgressBar";
import { FaCheck } from "react-icons/fa";

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

    const now = 60;

    return (
      <div>
        <div className="option-container">
          <div className="option-header">
            <span>
              <img src={avatar} alt={`Avatar of ${name}`} className="avatar" />
            </span>
            <span className="option-header-name">Asked by {name}</span>
          </div>

          <div className="option-body">
            <div>
              <div className="option-your-vote">
                {optionOneText}
                <span>
                  (<FaCheck /> Your vote)
                </span>
              </div>
              <hr className="option-line" />

              <div className="option-body-row">
                <ProgressBar now={now} label={`${now}%`} />
              </div>
              <div className="option-body-row">1 of 3 votes</div>
            </div>
          </div>
          <div className="option-body">
            <div>
              <div>{optionTwoText}</div>
              <hr className="option-line" />

              <div className="option-body-row">
                <ProgressBar now={now} label={`${now}%`} />
              </div>
              <div className="option-body-row">2 of 3 votes</div>
            </div>
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

export default connect(mapStateToProps)(AnsweredQuestion);
