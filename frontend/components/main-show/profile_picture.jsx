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
        <div id="profile-picture"
          style={ {backgroundImage: `url(${this.props.user.image_url})` } }>
        </div>

        { this.state.modalOpen ?
          <div className="modal">
            <div className="modal-content">
              <button onClick={ this.closeModal }
                className="close">
                close
              </button>
              <PictureUpload
                updatePhoto={ this.props.updatePhoto }
                currentUser= { this.props.currentUser }
                closeModal={ this.closeModal }
                photoType="user[profile_pic]"/>
            </div>
          </div>
          : ""}
      </div>
    );
  }
}

export default ProfilePicture;
