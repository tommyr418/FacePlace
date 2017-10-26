import React from 'react';
import { Link } from 'react-router-dom';

const ProfileNav = ({ currentUser }) => {
  return (
    <nav id="profile-nav">
      <Link to={`users/${currentUser.id}`}>
      Timeline
      </Link>
      <Link to={`users/${currentUser.id}/about`}>
      About
      </Link>
      <Link to={`users/${currentUser.id}/friends`}>
      Friends
      </Link>
      <Link to={`users/${currentUser.id}/photos`}>
      Photos
      </Link>
    </nav>
  );
};

export default ProfileNav;
