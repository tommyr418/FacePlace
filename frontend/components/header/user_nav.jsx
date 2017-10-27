import React from 'react';
import { Link } from 'react-router-dom';

const UserNav = ({ logout, currentUser }) => {
  return (
    <nav id="user-nav">
      <Link to={`users/${currentUser.id}`}>
      { currentUser.fname }
      </Link>

      <Link to="/">
        Home
      </Link>

      <Link to="/find-friends">
        Find Friends
      </Link>

      <button onClick={ logout }>Logout</button>
    </nav>
  );
};

export default UserNav;
