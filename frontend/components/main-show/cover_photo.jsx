import React from 'react';

import ProfilePicture from './profile_picture';

const CoverPhoto = ({ user, currentUser, updateProfilePic }) => {
  if (currentUser.id === user.id) {
    return (
      <div id="cover-photo">
        <button>Add/Update Cover Photo</button>

        <ProfilePicture user={ user }
          currentUser={ currentUser }
          updateProfilePic={ updateProfilePic }/>
        <img src={ user.cover_image_url }/>
      </div>
    );
  } else if (currentUser.friends.includes(user.id)) {
    return (
      <div id="cover-photo">
        <ProfilePicture user={ user }
          currentUser={ currentUser }
          updateProfilePic={ updateProfilePic }/>
        <img src={ user.cover_image_url }/>
      </div>
    );
  } else {
    return (
      <div id="cover-photo">

        <ProfilePicture user={ user }
          currentUser={ currentUser }
          updateProfilePic={ updateProfilePic }/>
        <img src={ user.cover_image_url }/>
        <button>Add Friend</button>
      </div>
    );
  }
};

export default CoverPhoto;
