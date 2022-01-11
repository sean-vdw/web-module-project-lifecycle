import React from 'react';
import axios from 'axios';
import User from './components/User';
import FollowerList from './components/FollowerList';
import Follower from './components/Follower';


class App extends React.Component {
  state = {
    handle: '',
    url: ''
  }

  handleChange = (e) => {
    this.setState({
      ...this.state,
      handle: e.target.value
    });
  }

  handleSearch = (e) => {
    e.preventDefault();
    const handle = this.state.handle;
    this.setState({
      ...this.state,
      url: `https://api.github.com/users/${handle}`
    })
  }

  render() {
    return(
      <div>
        <h1>Github Info</h1>
        <form>
          <input 
            placeholder='Github handle'
            onChange={this.handleChange}
            value={this.state.handle}
          />
          <button onClick={this.handleSearch}>Search</button>
        </form>
        <User />
      </div>
    );
  }
}

export default App;
