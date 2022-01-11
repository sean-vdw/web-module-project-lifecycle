import React from 'react';

class Follower extends React.Component {
  render() {
    const { follower } = this.props;
    return (
      <div key={follower.id} className='follower-card'>
        <img src={follower.avatar_url} className='follower-img'/>
        <p>Handle: {follower.login}</p>
      </div>
    )
  }
}

export default Follower;