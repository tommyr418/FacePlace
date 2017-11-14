import React from 'react';

class NewsFeedForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: "",
      author_id: this.props.currentUser.id,
      wall_id: this.props.currentUser.id,
    };
    this.handleFocus = this.handleFocus.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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

  render() {
    return (
      <form onSubmit={ this.handleSubmit }>
        <div className="post-form-head">
          <a>
            <i className="fa fa-pencil" aria-hidden="true"></i>
            Post
          </a>

          <a>
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
    );
  }
}

export default NewsFeedForm;
