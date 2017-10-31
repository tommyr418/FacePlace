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
        <img />
      </div>
    );
  } else if (currentUser.friends.includes(user.id)) {
    return (
      <div id="cover-photo">
        <ProfilePicture user={ user }
          currentUser={ currentUser }
          updateProfilePic={ updateProfilePic }/>
        <img />
      </div>
    );
  } else {
    return (
      <div id="cover-photo">

        <ProfilePicture user={ user }
          currentUser={ currentUser }
          updateProfilePic={ updateProfilePic }/>
        <img />
        <button>Add Friend</button>
      </div>
    );
  }
};

export default CoverPhoto;
