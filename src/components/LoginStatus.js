import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { userLogout } from "../actions/authedUser";

const LoginStatus = function (props) {
    const {dispatch, userName} = props;
    const hrefLink = "#";

    const handleLogout = e => {
        e.preventDefault();

        dispatch(userLogout());

        props.history.push('/');
    }

    return (
        <div className="login-status">
            <span>Hello, {userName}</span>
            <span className="login-status-link">
                <a 
                href={hrefLink} 
                onClick={handleLogout}>
                    Logout
                </a>
            </span>
        </div>
    );
}

const mapStateToProps = ({ authedUser, users }) => {
    return {
      userName: users[authedUser].name
    };
  };

export default withRouter(connect(mapStateToProps)(LoginStatus));