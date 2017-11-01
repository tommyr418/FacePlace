import React from 'react';
import { Link } from 'react-router-dom';

class Friends extends React.Component {
  componentDidMount() {
    this.props.fetchFriends(this.props.user.id);
  }

  render() {
    for (var i = 0; i < this.props.user.friends.length; i++) {
      const id = this.props.user.friends[i];
      if (!this.props.users[id]) {
        return null;
      }
    }

    const friends = this.props.user.friends.map((friendId) => {
      const friend = this.props.users[friendId];
      return (
        <li key={ friendId }>
          <img src={ friend.image_url } />
          <Link to={`/users/${friendId}`}>
            {friend.fname} {friend.lname}
          </Link>
        </li>
      );
    });
    return (
      <div className="content-pane">
        <div className="content-title">
          <a>Friends</a>
        </div>

        <div id="friends-list">
          <ul>
            { friends }
          </ul>
        </div>
      </div>
    );
  }
}

export default Friends;
