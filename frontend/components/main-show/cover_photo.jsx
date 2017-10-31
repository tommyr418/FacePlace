import React from 'react';

import ProfilePicture from './profile_picture';
import PictureUpload from './picture_upload';

class CoverPhoto extends React.Component {
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
    const addCover = (this.props.currentUser.id === this.props.user.id) ?
      <button id="add-cover-button"
        onClick={ this.openModal }>
        Add/Update Cover Photo
      </button>
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
          updatePhoto={ this.props.updatePhoto }/>
        <img src={ this.props.user.cover_image_url }/>

        { addFriend }

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
                photoType="user[cover_photo]"/>
            </div>
          </div>
          : ""}
      </div>
    );
  }
}

export default CoverPhoto;
