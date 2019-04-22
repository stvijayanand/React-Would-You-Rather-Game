import React, { Component } from "react";
import { connect } from "react-redux";
import { setAuthedUser } from "../actions/authedUser";
import { Redirect } from "react-router-dom";

class Login extends Component {
  state = {
    userId: "tylermcginnis",
    toHome: false
  };

  handleUsernameChange = e => {
    this.setState({ userId: e.target.value });
  };

  handleSignIn = e => {
    e.preventDefault();
    const { dispatch } = this.props;
    const { userId } = this.state;

    dispatch(setAuthedUser(userId));

    this.setState(prevState => ({
      ...prevState,
      toHome: true
    }));
  };

  render() {
    const { userId, toHome } = this.state;
    const { users } = this.props;

    if (toHome === true) {
      return <Redirect to="/home" />;
    }

    return (
      <div className="login-container">
        <div className="form-container center">
          <h3>Login</h3>
          <form className="form" onSubmit={this.handleSignIn}>
            <div className="form-row">
              <select value={userId} onChange={this.handleUsernameChange}>
                {Object.keys(users).map(uid => (
                  <option key={uid} value={uid}>
                    {users[uid].name}
                  </option>
                ))}
              </select>
            </div>

            <button className="btn-new" type="submit">
              Sign In
            </button>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ users }) => {
  return {
    users
  };
};

export default connect(mapStateToProps)(Login);
