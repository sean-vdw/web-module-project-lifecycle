import React from "react";

class User extends React.Component {
  render() {
    return (
      <div>
        <div>
          <img src={this.props.userData.avatar_url}></img>
        </div>
        <div>
          <h2>{this.props.userData.name}</h2>
          <p>Github Handle: {this.props.userData.login}</p>
          <p>Total Repos: {this.props.userData.public_repos}</p>
          <p>Total Followers: {this.props.userData.followers}</p>
        </div>
      </div>
    );
  }
}

export default User;