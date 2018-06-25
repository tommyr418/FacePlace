import React from 'react';
import { Link } from 'react-router-dom';
import { RingLoader } from 'react-spinners';

class FriendsSummary extends React.Component {
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
      return (
        <div className="friends-summary spinner">
          <RingLoader />
        </div>
      );
    }

    if(!this.props.user || !this.props.user.friends) {
      return (
        <div className="friends_summary spinner">
          <RingLoader />
        </div>
      );
    }

    const friends = this.props.user.friends.slice(0,9).map((friendId) => {
      const friend = this.props.users[friendId];
      return (
        <li key={ friendId }>
          <Link to={`/users/${friendId}`} className="friend-thumbnail">
            <img src={ friend.image_url } />
            <span>{friend.fname} {friend.lname}</span>
          </Link>
        </li>
      );
    });
    return (
      <div id="friends-summary">
        <div id="intro-title">
          <div id="intro-logo">
            <i className="fa fa-globe" aria-hidden="true"></i>
          </div>
          <span>Friends</span>
        </div>

        <ul>
          { friends }
        </ul>

        <Link to={ `/users/${ this.props.user.id }/friends` }>
          <span>See All Friends</span>
        </Link>
      </div>
    );
  }
}

export default FriendsSummary;
