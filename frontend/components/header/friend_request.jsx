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
    debugger
    for (var i = 0; i < this.props.currentUser.pending_requests.length; i++) {
      const id = this.props.currentUser.pending_requests[i].requester_id
      if (!this.props.users[id]) {
        return null;
      }
    }

    const requests = this.props.currentUser.pending_requests.map((request) => {
      const id = request.requester_id;
      const user = this.props.users[id];
      return (
        <li key={ id }>
          <img src={ user.image_url }/>
          <span>{ user.fname } { user.lname }</span>
          <button>confirm</button>
          <button>ignore</button>
        </li>
      );
    });
    return (
      <div className="dropdown-content"
        id="friend-requests">
        <ul>
          { requests }
        </ul>
      </div>
    );
  }
}

export default enhanceWithClickOutside(FriendRequest);
