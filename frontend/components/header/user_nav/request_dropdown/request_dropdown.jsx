import React, { Component } from 'react';
import enhanceWithClickOutside from 'react-click-outside';

class RequestDropdown extends Component {

  componentDidMount() {
    this.props.fetchRequesters();
  }

  handleClickOutside = (e) => {
    this.props.toggleRequests(e);
  }

  addFriend = (e) => {
    this.props.addFriend({
      friender_id: e.currentTarget.getAttribute("data-requesterid"),
      friendee_id: this.props.currentUser.id,
    });
    this.props.updateRequest({
      id: e.currentTarget.getAttribute("data-requestid"),
      status: "completed"
    });
  }

  rejectFriend = (e) => {
    this.props.updateRequest({
      id: e.currentTarget.getAttribute("data-requestid"),
      status: "completed"
    });
  }

  render() {
    for (var i = 0; i < this.props.currentUser.pending_requests.length; i++) {
      const id = this.props.currentUser.pending_requests[i].requester_id;
      if (!this.props.users[id]) {
        return null;
      }
    }

    if (this.props.currentUser.pending_requests.length === 0){
      return (
        <div className="dropdown-content"
          id="friend-requests">
          <span>
            No new requests
          </span>
        </div>
      );
    }

    const requests = this.props.currentUser.pending_requests.map((request) => {
      const id = request.requester_id;
      const user = this.props.users[id];
      return (
        <li key={ id }>
          <div>
            <img src={ user.image_url }/>
            <span>{ user.fname } { user.lname }</span>
          </div>
          <div>
            <button
              onClick={ this.addFriend }
              data-requesterid={ id }
              data-requestid={ request.id }>
              confirm
            </button>
            <button
              onClick={ this.rejectFriend }
              data-requestid={ request.id }>
              ignore
            </button>
          </div>
        </li>
      );
    });
    return (
      <div className="dropdown-content"
        id="friend-requests">
        <span>Friend Requests</span>
        <ul>
          { requests }
        </ul>
      </div>
    );
  }
}

export default enhanceWithClickOutside(RequestDropdown);
