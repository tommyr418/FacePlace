import React from 'react';
import { Link } from 'react-router-dom';

import ProfilePictureUpload from './profile_picture_upload';

class ProfilePicture extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false,
    };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    if(this.props.currentUser.id === this.props.user.id) {
      this.setState({
        modalOpen: true,
      });
    }
  }

  closeModal(){
    this.setState({
      modalOpen: false,
    });
  }

  render() {
    return (
      <div id="profile-picture-div">
        <img id="profile-picture"
          src={ this.props.user.image_url }
          onClick={ this.openModal }/>

        { this.state.modalOpen ?
          <div>
            <button onClick={ this.closeModal }>close</button>
            <ProfilePictureUpload />
          </div>
          : ""}
      </div>
    );
  }
}

export default ProfilePicture;
