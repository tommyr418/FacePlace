import React from 'react';
import { Link } from 'react-router-dom';

import PictureUpload from './picture_upload';

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
          <div className="modal">
            <div className="modal-content">
              <button onClick={ this.closeModal }
                className="close">
                close
              </button>
              <PictureUpload
                updateProfilePic={ this.props.updateProfilePic }
                currentUser= { this.props.currentUser }
                closeModal={ this.closeModal }/>
            </div>
          </div>
          : ""}
      </div>
    );
  }
}

export default ProfilePicture;
