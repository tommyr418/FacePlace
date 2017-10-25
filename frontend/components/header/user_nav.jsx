import React from 'react';

const UserNav = ({ logout, currentUser }) => {
  return (
    <nav id="user-nav">
      <span>{ currentUser.fname }</span>
      <button onClick={ logout }>Logout</button>
    </nav>
  );
};

export default UserNav;
