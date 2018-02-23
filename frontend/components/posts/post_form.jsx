import React from 'react';

import PostPicture from './post_picture';

class PostForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: "",
      author_id: this.props.currentUser.id,
      wall_id: this.props.user ? this.props.user.id : this.props.currentUser.id,
      modalOpen: false,
    };
    this.handleFocus = this.handleFocus.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
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

  handleSubmit(e) {
    e.preventDefault();
    const post = Object.assign({}, this.state);
    e.currentTarget.children[1].children[1].value
      = e.currentTarget.children[1].children[1].defaultValue;
    e.currentTarget.children[1].children[1].style.color = "#a6a6a6";
    e.currentTarget.children[1].children[1].blur();
    this.props.createPost(post).then(
      () => {
        this.setState({
          body: "",
        });
      }
    );
  }

  handleInputChange(e){
    this.setState({
      body: e.currentTarget.value
    });
  }

  openModal() {
    this.setState({
      modalOpen: true,
    });
  }

  closeModal(){
    this.setState({
      modalOpen: false,
    });
  }

  render() {
    return (
      <div className="post-form">
        <form onSubmit={ this.handleSubmit }>
          <div className="post-form-head">
            <a>
              <i className="fa fa-pencil" aria-hidden="true"></i>
              Post
            </a>

            <a onClick={ this.openModal }>
              <i className="fa fa-camera" aria-hidden="true"></i>
              Photo
            </a>
          </div>

          <div className="post-form-body">
            <img src={ this.props.currentUser.image_url }/>

            <input type="text"
              defaultValue="What's on your mind?"
              onFocus={ this.handleFocus }
              onBlur={ this.handleBlur }
              onChange={ this.handleInputChange }></input>
          </div>

          <div className="post-form-foot">
            <button>Post</button>
          </div>
        </form>

        { this.state.modalOpen ?
          <div className="modal">
            <div className="modal-content">
              <button onClick={ this.closeModal }
                className="close">
                close
              </button>
              <PostPicture
                createPostPicture={ this.props.createPostPicture }
                currentUser={ this.props.currentUser }
                closeModal={ this.closeModal }
                wallID={ this.props.currentUser.id }/>
            </div>
          </div>
          : ""}
      </div>
    );
  }
}

export default PostForm;
