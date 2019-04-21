import React, { Component } from "react";
import { connect } from "react-redux";
import handleInitialData from "../actions/shared";
import LoadingBar from "react-redux-loading";
import DashBoard from "./Dashboard";
import NewQuestion from "./NewQuestion";
import Question from "./Question";
import LeaderBoard from "./LeaderBoard";

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }

  render() {
    return (
      <div className="App">
        <LoadingBar />
        {this.props.loading === true ? null : (
          <LeaderBoard></LeaderBoard>
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
