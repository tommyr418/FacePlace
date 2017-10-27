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
      <Link to={`/users/${user.id}/photos`}>
      Photos
      </Link>
      <Link to={`/users/${user.id}`}>
      More
      </Link>
    </nav>
  );
};

export default ProfileNav;
