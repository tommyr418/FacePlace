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

  componentDidMout() {
    
  }

  render() {
    return (
      <div className="dropdown-content"
        id="friend-requests">

      </div>
    );
  }
}

export default enhanceWithClickOutside(FriendRequest);
