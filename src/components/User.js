import React from "react";
import axios from "axios";

class User extends React.Component {
  state = {
    name: "",
    image: "",
    handle: "",
    repos: "",
    followers: "",
  }

  componentDidMount() {
    axios.get('https://api.github.com/users/sean-vdw')
      .then(resp => {
        console.log(resp.data);
        this.setState({
          ...this.state,
          name: resp.data.name,
          image: resp.data.avatar_url,
          handle: resp.data.login,
          repos: resp.data.public_repos,
          followers: resp.data.followers, 
        })
      })
  }

  render() {
    return (
      <div>
        <div>
          <img src={this.state.image}></img>
        </div>
        <div>
          <h2>{this.state.name}</h2>
          <p>{this.state.handle}</p>
          <p>Total Repos: {this.state.repos}</p>
          <p>Total Followers: {this.state.followers}</p>
        </div>
      </div>
    );
  }
}

export default User;