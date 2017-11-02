import React from 'react';

class TimelineForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: "",
      author_id: this.props.currentUser.id,
      wall_id: this.props.user.id,
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
    this.props.createPost(post);
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

export default TimelineForm;
