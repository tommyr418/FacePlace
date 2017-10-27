import React from 'react';

import ProfilePicture from './profile_picture';

const CoverPhoto = ({ user }) => (
  <div id="cover-photo">
    <button>Add Cover Photo</button>

    <ProfilePicture user={ user } />
    <img />
  </div>
);

export default CoverPhoto;
