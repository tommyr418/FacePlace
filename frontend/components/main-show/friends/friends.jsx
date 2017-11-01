import React from 'react';

class Friends extends React.Component {
  render() {
    const friends = this.props.user.friends.map(() => (
      <li>

      </li>
      )
    );
    return (
      <div className="content-pane">
        <div className="content-title">
          <a>Friends</a>
        </div>

        <div>

        </div>
      </div>
    );
  }
}

export default Friends;
