import React, { Component } from "react";
import { connect } from "react-redux";
import LoadingBar from "react-redux-loading";
import DashBoard from "./Dashboard";

class App extends Component {
  render() {
    return (
      <div className="App">
        <LoadingBar />
        <DashBoard />
      </div>
    );
  }
}

export default connect()(App);
