import React, { Component } from "react";
import { connect } from "react-redux";
import { handleSaveQuestion } from "../actions/questions";

class NewQuestion extends Component {
  state = {
    optionOneText: "",
    optionTwoText: ""
  };
  //   handleChange = e => {
  //     const text = e.target.value;

  //     this.setState(() => ({
  //       text
  //     }));
  //   };
  handleSubmit = e => {
    e.preventDefault();

    //   const { text } = this.state;

    //   const { dispatch, id } = this.props;
    //   dispatch(handleSaveTweet(text, id));

    //   this.setState(() => ({
    //     text: "",
    //     toHome: id ? false : true
    //   }));
  };
  render() {
    const { optionOneText, optionTwoText } = this.state;

    //const tweetLeft = 280 - optionOneText.length;

    return (
      <div className="form-container center">
        <h3>Would you rather?</h3>
        <form className="form" onSubmit={this.handleSubmit}>
          <div className="form-row">
            <label>
              Option 1:
              <input
                placeholder="do this"
                value={optionOneText}
                onChange={this.handleChange}
                className="text"
                maxLength={100}
              />
            </label>
          </div>

          <div className="form-row">
            <label>
              Option 2:
              <input
                placeholder="do that"
                value={optionTwoText}
                onChange={this.handleChange}
                className="text"
                maxLength={100}
              />
            </label>
          </div>

          {/* {tweetLeft <= 100 && <div className="tweet-length">{tweetLeft}</div>} */}
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
