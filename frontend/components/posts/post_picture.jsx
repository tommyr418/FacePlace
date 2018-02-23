import React from 'react';

class PostPicture extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: "",
      author_id: this.props.currentUser.id,
      wall_id: this.props.wallID,
      imageUrl: "",
      imageFile: null,
    };
    this.handleFile = this.handleFile.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
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

  handleFocus(e) {
    if (e.currentTarget.value === e.currentTarget.defaultValue) {
      e.currentTarget.value = "";
      e.currentTarget.style.color = "#333";
    }
  }

  handleBlur(e) {
    if (e.currentTarget.value === "") {
      e.currentTarget.style.color = "#a6a6a6";
      e.currentTarget.value = e.currentTarget.defaultValue;
    }
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
          onChange={ this.handleInputChange }
          defaultValue="Write a caption..."
          onFocus={ this.handleFocus }
          onBlur={ this.handleBlur }></input>
        <button className="submit">Submit</button>
      </form>
    );
  }
}

export default PostPicture;
