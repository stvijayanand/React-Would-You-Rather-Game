import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import handleInitialData from "../actions/shared";
import LoadingBar from "react-redux-loading";
import DashBoard from "./Dashboard";
import NewQuestion from "./NewQuestion";
import Question from "./Question";
import LeaderBoard from "./LeaderBoard";
import Nav from "./Nav"
import Login from "./Login";
import { BrowserRouter, Route, Switch} from "react-router-dom";
import { NotFound } from "./NotFound";

const CatchAll = ({ location }) => (
  <div>
    <h3>
       404: <code>{location.pathname}</code> Not Found.
    </h3>
  </div>
);

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }

  render() {
    const {authedUser} = this.props;

    return (
      <BrowserRouter>
        <Fragment>
          <LoadingBar />
          <div className="container">

          {(authedUser !== null) && (
            <Nav />
          )}
            
            {this.props.loading === true ? null : (
              <div>
                <Switch>
                  <Route path="/" exact component={Login} />
                  <Route path="/home" exact component={DashBoard} />
                  <Route path="/questions/:question_id" component={Question} />
                  <Route path="/add" component={NewQuestion} />
                  <Route path="/leaderboard" component={LeaderBoard} />
                  <Route path="/404" component={NotFound} />
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

const mapStateToProps = ({ questions, users, authedUser }) => {
  return {
    loading: questions === null 
            || users === null,
    authedUser
  };
};

export default connect(mapStateToProps)(App);
