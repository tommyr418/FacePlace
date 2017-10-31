import React from 'react';

import ProfilePicture from './profile_picture';

const CoverPhoto = ({ user, currentUser}) => {
  if (currentUser.id === user.id || currentUser.friends.includes(user.id)) {
    return (
      <div id="cover-photo">
        <button>Add Cover Photo</button>

        <ProfilePicture user={ user }
          currentUser={ currentUser }/>
        <img />
      </div>
    );
  } else {
    return (
      <div id="cover-photo">
        <button>Add Cover Photo</button>

        <ProfilePicture user={ user }
          currentUser={ currentUser }/>
        <img />
        <button>Add Friend</button>
      </div>
    );
  }
};

export default CoverPhoto;
