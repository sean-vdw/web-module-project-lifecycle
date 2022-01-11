import React from "react";

class User extends React.Component {
  render() {
    return (
      <div className="user-cont">
        <div>
          <img src={this.props.userData.avatar_url}></img>
        </div>
        <div className="user-data">
          <p>Github Handle: {this.props.userData.login}</p>
          <p>Total Repos: {this.props.userData.public_repos}</p>
          <p>Total Followers: {this.props.userData.followers}</p>
        </div>
      </div>
    );
  }
}

export default User;