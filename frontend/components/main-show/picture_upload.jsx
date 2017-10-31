import React from 'react';

class PictureUpload extends React.Component {
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

  handleSubmit(e) {
    e.preventDefault();
    const file = this.state.imageFile;
    const formData = new FormData();
    formData.append("user[id]", this.props.currentUser.id);
    if (file) formData.append(this.props.photoType, file);
    this.props.updatePhoto(formData).then(
        this.props.closeModal
    );
  }

  render() {
    return (
      <form id="picture-upload"
        onSubmit={ this.handleSubmit }>
        <input type="file"
          onChange={ this.handleFile }>
        </input>
        <img src={ this.state.imageUrl }/>
        <button>Submit</button>
      </form>
    );
  }
}

export default PictureUpload;
