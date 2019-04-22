import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import handleInitialData from "../actions/shared";
import LoadingBar from "react-redux-loading";
import DashBoard from "./Dashboard";
import NewQuestion from "./NewQuestion";
import Question from "./Question";
import LeaderBoard from "./LeaderBoard";
import Login from "./Login";
import { BrowserRouter, Route, Switch } from "react-router-dom";

const CatchAll = ({ location }) => (
  <div>
    <h3>
      No match for <code>{location.pathname}</code>
    </h3>
  </div>
);

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }

  render() {
    return (
      <BrowserRouter>
        <Fragment>
          <LoadingBar />
          <div className="container">
            {/* <Nav /> */}
            {this.props.loading === true ? null : (
              <div>
                <Switch>
                  <Route path="/" exact component={Login} />
                  <Route path="/home" exact component={DashBoard} />
                  <Route path="/questions/:id" component={Question} />
                  <Route path="/add" component={NewQuestion} />
                  <Route path="/leaderboard" component={LeaderBoard} />
                  <Route component={CatchAll} />
                </Switch>
              </div>
            )}
          </div>
        </Fragment>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = ({ questions, users }) => {
  return {
    loading: questions === null || users === null
  };
};

export default connect(mapStateToProps)(App);
