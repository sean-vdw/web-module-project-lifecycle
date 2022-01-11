import React from 'react';
import axios from 'axios';
import User from './components/User';
import FollowerList from './components/FollowerList';


class App extends React.Component {
  state = {
    userData: [],
    followers: [],
    handle: ''
  }

  componentDidMount() {
    axios.get('https://api.github.com/users/sean-vdw')
      .then(resp => {
        this.setState({
          ...this.state,
          userData: resp.data
        })
        axios.get('https://api.github.com/users/sean-vdw/followers')
          .then(res => {
            this.setState({
              ...this.state,
              followers: res.data
            });
          });
      });
  }

  handleChange = (e) => {
    this.setState({
      ...this.state,
      handle: e.target.value
    });
  }

  handleSearch = (e) => {
    e.preventDefault();
    const userHandle = this.state.handle;
    axios.get(`https://api.github.com/users/${userHandle}`)
      .then(resp => {
        this.setState({
          ...this.state,
          userData: resp.data
        });
        axios.get(`https://api.github.com/users/${userHandle}/followers`)
          .then(res => {
            this.setState({
              ...this.state,
              followers: res.data
            });
          });
      });
  }

  render() {
    return(
      <div className='container'>
        <h1 className='title'>Github Info</h1>
        <p className='subtitle'>Enter a Github handle to begin...</p>
        <form>
          <input 
            placeholder='Github handle'
            onChange={this.handleChange}
            value={this.state.handle}
            className='input'
          />
          <button onClick={this.handleSearch} className='btn'>Search</button>
        </form>
        <h2 className='profile-title'>User Profile</h2>
        <User userData={this.state.userData} />
        <h2>Followers:</h2>
        <FollowerList followers={this.state.followers} />
      </div>
    );
  }
}

export default App;
