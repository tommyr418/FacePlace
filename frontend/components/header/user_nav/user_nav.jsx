import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import './user_nav.css';
import { logout } from '../../../actions/session_actions';
import { fetchRequesters } from '../../../actions/user_actions';
import { addFriend, updateRequest } from "../../../actions/friend_actions";
import RequestDropdown from './request_dropdown/request_dropdown';

class UserNav extends Component {

  state = {
    requestsOpen: false,
  };

  toggleRequests = (e) => {
    e.stopPropagation();
    this.setState({
      requestsOpen: !this.state.requestsOpen,
    });
  }

  render() {
    const { currentUser } = this.props;

    return (
      <div id="user-nav">

        <Link to={`/users/${ currentUser.id }`}>
          <div id="header-image">
            <img src={ currentUser.image_url }/>
          </div>
          <span>{ currentUser.fname }</span>
        </Link>

        <Link to="/">
          <span>Home</span>
        </Link>

        <a onClick={ this.toggleRequests }>
          <i className="fa fa-users" aria-hidden="true"></i>

          {
            this.state.requestsOpen ?
            <RequestDropdown 
              toggleRequests={ this.toggleRequests }
              { ...this.props } />
            :
            null
          }
        </a>

        <button onClick={ this.props.logout }>Logout</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.entities.users,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout()),
    fetchRequesters: () => dispatch(fetchRequesters()),
    addFriend: friend => dispatch(addFriend(friend)),
    updateRequest: request => dispatch(updateRequest(request)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserNav);
