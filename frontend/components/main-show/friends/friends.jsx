import React from 'react';
import { Link } from 'react-router-dom';

class Friends extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    };
  }

  componentDidMount() {
    this.props.fetchFriends(this.props.user.id).then(
      () => {
        this.setState({
          loading: false,
        });
      }
    );
  }

  render() {
    if (this.state.loading) {
      return null;
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
