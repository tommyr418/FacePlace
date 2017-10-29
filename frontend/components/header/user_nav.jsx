import React from 'react';
import { Link } from 'react-router-dom';

const UserNav = ({ logout, currentUser }) => {
  return (
    <nav id="user-nav">

      <Link to={`/users/${currentUser.id}`}>
        <div id="header-image">
          <img src={ currentUser.image_url }/>
        </div>
        <span>{ currentUser.fname }</span>
      </Link>

      <Link to="/">
        <span>Home</span>
      </Link>

      <Link to="/find-friends">
        <span>Find Friends</span>
      </Link>

      <button onClick={ logout }>Logout</button>
    </nav>
  );
};

export default UserNav;
