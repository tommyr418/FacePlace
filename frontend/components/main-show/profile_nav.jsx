import React from 'react';
import { Link } from 'react-router-dom';

const ProfileNav = ({ user }) => {
  return (
    <nav id="profile-nav">
      <Link to={`/users/${user.id}`}>
      Timeline
      </Link>
      <Link to={`/users/${user.id}/about`}>
      About
      </Link>
      <Link to={`/users/${user.id}/friends`}>
      Friends
      </Link>
      <a>
      Photos
      </a>
      <a>
      More
      </a>
    </nav>
  );
};

export default ProfileNav;
