import React from 'react';

class ProfilePictureUpload extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imageUrl: "",
      imageFile: null,
    };
    this.handleFile = this.handleFile.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleFile(e) {
    const reader = new FileReader();
    const file = e.currentTarget.files[0];
    reader.onloadend = () =>
      this.setState({ imageUrl: reader.result, imageFile: file});

    if (file) {
      reader.readAsDataURL(file);
    } else {
      this.setState({ imageUrl: "", imageFile: null });
    }
  }

  handleSubmit() {
    
  }

  render() {
    return (
      <form id="profile-picture-upload">
        <input type="file"
          onChange={ this.handleFile }
          onSubmit={ this.handleSubmit }>
        </input>
        <img src={ this.state.imageUrl }/>
        <button>Submit</button>
      </form>
    );
  }
}

export default ProfilePictureUpload;
