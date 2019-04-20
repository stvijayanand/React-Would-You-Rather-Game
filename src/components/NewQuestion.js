import React, { Component } from "react";
import { connect } from "react-redux";
import { handleSaveQuestion } from "../actions/questions";

class NewQuestion extends Component {
  state = {
    optionOneText: "",
    optionTwoText: ""
  };

  handleChange = e => {
    const text = e.target.value;
    const name = e.target.name;

    if (name === "option1") {
      this.setState(prevState => ({
        ...prevState,
        optionOneText: text
      }));
    } else {
      this.setState(prevState => ({
        ...prevState,
        optionTwoText: text
      }));
    }
  };

  handleSubmit = e => {
    e.preventDefault();

    const { optionOneText, optionTwoText } = this.state;
    const { dispatch } = this.props;

    dispatch(handleSaveQuestion(optionOneText, optionTwoText));

    this.setState(() => ({
      optionOneText: "",
      optionTwoText: ""
    }));
  };

  render() {
    const { optionOneText, optionTwoText } = this.state;

    const optionOneTextLeft = 60 - optionOneText.length;
    const optionTwoTextLeft = 60 - optionTwoText.length;

    return (
      <div className="form-container center">
        <h3>Would you rather?</h3>
        <form className="form" onSubmit={this.handleSubmit}>
          <div className="form-row">
            <label>
              Option 1:
              <input
                placeholder="do this"
                name="option1"
                value={optionOneText}
                onChange={this.handleChange}
                className="text"
                maxLength={60}
              />
            </label>
            {optionOneTextLeft <= 20 && (
              <span className="question-length">{optionOneTextLeft}</span>
            )}
          </div>

          <div className="form-row">
            <label>
              Option 2:
              <input
                placeholder="do that"
                name="option2"
                value={optionTwoText}
                onChange={this.handleChange}
                className="text"
                maxLength={60}
              />
            </label>
            {optionTwoTextLeft <= 20 && (
              <span className="question-length">{optionTwoTextLeft}</span>
            )}
          </div>

          <button
            className="btn-new"
            type="submit"
            disabled={optionOneText === "" || optionTwoText === ""}
          >
            Add Poll
          </button>
        </form>
      </div>
    );
  }
}

export default connect()(NewQuestion);
