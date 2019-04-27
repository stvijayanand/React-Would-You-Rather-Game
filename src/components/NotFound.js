import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

const NotFound = props => {
  if (props.authedUser === null) {
    return (
      <Redirect
        to={{
          pathname: "/",
          state: { referrer: props.location }
        }}
      />
    );
  }

  return (
    <div>
      <h3>404: This Poll Not Found.</h3>
    </div>
  );
};

const mapStateToProps = ({ authedUser }) => {
  console.log("authedUser");
  console.log(authedUser);

  return {
    authedUser
  };
};

export default connect(mapStateToProps)(NotFound);
