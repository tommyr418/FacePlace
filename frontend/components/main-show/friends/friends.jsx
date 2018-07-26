import React from 'react';
import { Link } from 'react-router-dom';
import { RingLoader } from 'react-spinners';

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
      return (
        <div className="content-pane spinner">
          <RingLoader />
        </div>
      );
    }

    if(!this.props.user || !this.props.user.friends) {
      return (
        <div className="content-pane spinner">
          <RingLoader />
        </div>
      );
    }

    let friends = this.props.user.friends.map((friendId) => {
      const friend = this.props.users[friendId];
      return (
        <li key={ friendId }>
          <Link to={`/users/${friendId}`}>
            <img src={ friend.image_url } />
            <span>{friend.fname} {friend.lname}</span>
          </Link>
        </li>
      );
    });

    if (this.props.match.path === "/users/:userId/about") {
      friends = friends.slice(0,8);
    }

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

        { this.props.match.path === "/users/:userId/about" ?
          <Link to={ `/users/${ this.props.user.id }/friends` }
            id="link-to-friends">
            <span>See All Friends</span>
          </Link>
          :
          null
        }
      </div>
    );
  }
}

export default Friends;
