import React from 'react';
import { Link } from 'react-router-dom';

const ProfilePicture = ({ user }) => {
  return (
    <div id="profile-picture-div">
      <img id="profile-picture"
        src={ user.image_url } />
    </div>
  );
};

export default ProfilePicture;
