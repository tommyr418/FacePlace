import React from 'react';

class PostPicture extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: "",
      author_id: this.props.currentUser.id,
      wall_id: this.props.currentUser.id,
      imageUrl: "",
      imageFile: null,
    };
    this.handleFile = this.handleFile.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
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
    formData.append("post[body]", this.state.body);
    formData.append("post[author_id]", this.state.author_id);
    formData.append("post[wall_id]", this.state.wall_id);
    if (file) formData.append("post[image]", file);
    this.props.createPostPicture(formData).then(
        this.props.closeModal
    );
  }

  handleInputChange(e){
    this.setState({
      body: e.currentTarget.value
    });
  }

  render() {
    return (
      <form id="picture-upload"
        className="modal-form"
        onSubmit={ this.handleSubmit }>
        <input type="file"
          onChange={ this.handleFile }>
        </input>
        <img src={ this.state.imageUrl }/>
        <input type="text"
          onChange={ this.handleInputChange }></input>
        <button className="submit">Submit</button>
      </form>
    );
  }
}

export default PostPicture;
