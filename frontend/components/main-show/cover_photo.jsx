import React from 'react';

import ProfilePicture from './profile_picture';

const CoverPhoto = ({ currentUser }) => (
  <div id="cover-photo">
    <button>Add Cover Photo</button>

    <ProfilePicture currentUser={ currentUser } />
    <img />
  </div>
);

export default CoverPhoto;
