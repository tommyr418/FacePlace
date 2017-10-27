import React from 'react';
import { Link } from 'react-router-dom';

const ProfilePicture = ({ currentUser }) => {
  return (
    <div id="profile-picture-div">
      <img id="profile-picture" />
    </div>
  );
};

export default ProfilePicture;
