import React, { Component } from "react";
import { connect } from "react-redux";
import handleInitialData from "../actions/shared";
import LoadingBar from "react-redux-loading";
// import DashBoard from "./Dashboard";
// import NewQuestion from "./NewQuestion";
// import Question from "./Question";
// import LeaderBoard from "./LeaderBoard";
import Login from "./Login";

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }

  render() {
    return (
      <div className="App">
        <LoadingBar />
        {this.props.loading === true ? null : <Login />}
      </div>
    );
  }
}

const mapStateToProps = ({ questions }) => {
  return {
    loading: questions === null
  };
};

export default connect(mapStateToProps)(App);
