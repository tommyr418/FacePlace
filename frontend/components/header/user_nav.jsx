import React from 'react';

class UserNav extends React.Component {
  render() {
    return (
      <nav>
        <span>{this.props.currentUser.fname}</span>
        <button onClick={ this.props.logout }>Logout</button>
      </nav>
    );
  }
}

export default UserNav;
