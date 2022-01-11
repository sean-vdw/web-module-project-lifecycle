import React from 'react';

class Follower extends React.Component {
  render() {
    const { follower } = this.props;
    console.log(follower);

    return (
      <div key={follower.id}>
        <img src={follower.avatar_url} />
        <p>Name: {follower.name}</p>
        <p>Handle: {follower.login}</p>
      </div>
    )
  }
}

export default Follower;