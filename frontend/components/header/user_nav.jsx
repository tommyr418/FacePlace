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

      <a>
        <i className="fa fa-users" aria-hidden="true"></i>
      </a>

      <a>
        <i className="fa fa-commenting" aria-hidden="true"></i>
      </a>

      <a>
        <i className="fa fa-globe" aria-hidden="true"></i>
      </a>

      <button onClick={ logout }>Logout</button>
    </nav>
  );
};

export default UserNav;
