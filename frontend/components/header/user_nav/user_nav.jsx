import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import './user_nav.css';
import { logout } from '../../../actions/session_actions';
import { fetchRequesters } from '../../../actions/user_actions';
import { addFriend, updateRequest } from "../../../actions/friend_actions";
import RequestDropdown from './request_dropdown/request_dropdown';

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
            <RequestDropdown toggleRequests={ this.toggleRequests }
              fetchRequesters={ this.props.fetchRequesters }
              currentUser={ this.props.currentUser }
              users={ this.props.users }
              addFriend={ this.props.addFriend}
              updateRequest={ this.props.updateRequest }/>
            :
            null
          }
        </a>

        <button onClick={ this.props.logout }>Logout</button>
      </nav>
    );
  }
}

const mapStateToProps = (state) => (
  {
    users: state.entities.users,
  }
);

const mapDispatchToProps = (dispatch) => (
  {
    logout: () => dispatch(logout()),
    fetchRequesters: () => dispatch(fetchRequesters()),
    addFriend: friend => dispatch(addFriend(friend)),
    updateRequest: request => dispatch(updateRequest(request)),
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(UserNav);
