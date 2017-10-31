import React from 'react';

import ProfilePicture from './profile_picture';

class CoverPhoto extends React.Component {
  constructor(props) {
    super(props);

  }


  render() {
    const addCover = (this.props.currentUser.id === this.props.user.id) ?
      <button id="add-cover-button">Add/Update Cover Photo</button>
      :
      "";
    const addFriend = ((this.props.currentUser.id === this.props.user.id) || 
      this.props.currentUser.friends.includes(
      this.props.user.id)) ?
      ""
      :
      <button id="add-friend-button">Add Friend</button>;

    return (
      <div id="cover-photo">
        { addCover }

        <ProfilePicture user={ this.props.user }
          currentUser={ this.props.currentUser }
          updateProfilePic={ this.props.updateProfilePic }/>
        <img src={ this.props.user.cover_image_url }/>

        { addFriend }
      </div>
    );
  }
}

export default CoverPhoto;
