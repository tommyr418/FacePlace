import React from 'react';
import { Link } from 'react-router-dom';

const UserNav = ({ logout, currentUser }) => {
  return (
    <nav id="user-nav">
      <Link to={`users/${currentUser.id}`}>
      { currentUser.fname }
      </Link>
      <button onClick={ logout }>Logout</button>
    </nav>
  );
};

export default UserNav;
