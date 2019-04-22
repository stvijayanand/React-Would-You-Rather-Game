import React, { Component } from "react";
import { connect } from "react-redux";

class Login extends Component {
  state = {
    userName: ""
  };

  handleUsernameChange = e => {};

  handleSignIn = e => {
    e.preventDefault();
  };

  render() {
    const { userName } = this.state;
    const { users } = this.props;

    return (
      <div className="login-container">
        <div className="form-container center">
          <h3>Login</h3>
          <form className="form" onSubmit={this.handleSignIn}>
            <div className="form-row">
              <select value={userName} onChange={this.handleUsernameChange}>
                {Object.keys(users).map(uid => (
                  <option key={uid} value={uid}>
                    {users[uid].name}
                  </option>
                ))}
              </select>
            </div>

            <button
              className="btn-new"
              type="submit"
              disabled={userName === ""}
            >
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
