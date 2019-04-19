import React, { Component } from "react";
import { connect } from "react-redux";

class Dashboard extends Component {
  render() {
    return (
      <div>
        <h3 className="center">Polls</h3>
        <ul className="dashboard-list">
          {this.props.questionIds.map(id => (
            <li key={id}>
              <div>User asks - View Poll</div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = ({ questions }) => {
  return {
    questionIds: Object.keys(questions).sort(
      (a, b) => questions[b].timestamp - questions[a].timestamp
    )
  };
};

export default connect(mapStateToProps)(Dashboard);
