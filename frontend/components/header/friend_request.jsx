import React from 'react';
import enhanceWithClickOutside from 'react-click-outside';

class FriendRequest extends React.Component {
  constructor(props) {
    super(props);
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  handleClickOutside(e) {
    this.props.toggleRequests(e);
  }

  componentDidMount() {
    this.props.fetchRequesters();
  }

  render() {
    for (var i = 0; i < this.props.currentUser.pending_requests.length; i++) {
      const id = this.props.currentUser.pending_requests[i].requester_id
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
    };

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
            <button>confirm</button>
            <button>ignore</button>
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

export default enhanceWithClickOutside(FriendRequest);
