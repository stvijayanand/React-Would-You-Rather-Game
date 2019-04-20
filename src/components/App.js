import React, { Component } from "react";
import { connect } from "react-redux";
import handleInitialData from "../actions/shared";
import LoadingBar from "react-redux-loading";
import DashBoard from "./Dashboard";
import NewQuestion from "./NewQuestion";
import Question from "./Question";

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }

  render() {
    return (
      <div className="App">
        <LoadingBar />
        {this.props.loading === true ? null : (
          <Question match={{ params: { id: "8xf0y6ziyjabvozdd253nd" } }} />
        )}
      </div>
    );
  }
}

const mapStateToProps = ({ authedUser }) => {
  return {
    loading: authedUser === null
  };
};

export default connect(mapStateToProps)(App);
