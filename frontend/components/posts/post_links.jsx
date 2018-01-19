import React from 'react';

class PostLinks extends React.Component {
  constructor(props) {
    super(props);
    this.handleComment = this.handleComment.bind(this);
  }

  handleComment(e) {
    document.getElementById(`comment-input-${this.props.postId}`).focus();
  }

  render() {
    return (
      <div className="post-links">
        <a>
          <i className="fa fa-thumbs-o-up" aria-hidden="true"></i>
          Like
        </a>

        <a onClick={ this.handleComment }>
          <i className="fa fa-comment-o" aria-hidden="true"></i>
          Comment
        </a>
      </div>
    );
  }
}

export default PostLinks;
