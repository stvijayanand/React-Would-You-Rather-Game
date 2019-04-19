import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";
import LoadingBar from "react-redux-loading";

class App extends Component {
  render() {
    return (
      <div className="App">
        <LoadingBar />
      </div>
    );
  }
}

export default connect()(App);
