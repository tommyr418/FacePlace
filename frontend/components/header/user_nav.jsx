import React from 'react';
import { Link } from 'react-router-dom';

import FriendRequest from './friend_request';

class UserNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      requestsOpen: false,
    };
    this.toggleRequests = this.toggleRequests.bind(this);
  }

  toggleRequests(e) {
    e.stopPropagation();
    this.setState({
      requestsOpen: !this.state.requestsOpen,
    });
  }

  render() {
    return (
      <nav id="user-nav">

        <Link to={`/users/${ this.props.currentUser.id }`}>
          <div id="header-image">
            <img src={ this.props.currentUser.image_url }/>
          </div>
          <span>{ this.props.currentUser.fname }</span>
        </Link>

        <Link to="/">
          <span>Home</span>
        </Link>

        <a onClick={ this.toggleRequests }>
          <i className="fa fa-users" aria-hidden="true"></i>

          {
            this.state.requestsOpen ?
            <FriendRequest toggleRequests={ this.toggleRequests }
              fetchRequesters={ this.props.fetchRequesters }
              currentUser={ this.props.currentUser }
              users={ this.props.users }
              addFriend={ this.props.addFriend}
              updateRequest={ this.props.updateRequest }/>
            :
            null
          }
        </a>

        <a>
          <i className="fa fa-commenting" aria-hidden="true"></i>
        </a>

        <a>
          <i className="fa fa-globe" aria-hidden="true"></i>
        </a>

        <button onClick={ this.props.logout }>Logout</button>
      </nav>
    );
  }
}

export default UserNav;
