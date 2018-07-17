import React from 'react';

class PostLinks extends React.Component {
  constructor(props) {
    super(props);
    this.handleComment = this.handleComment.bind(this);
    this.handleLike = this.handleLike.bind(this);
  }

  handleComment(e) {
    document.getElementById(`comment-input-${this.props.postId}`).focus();
  }

  handleLike(e) {
    e.preventDefault();
    const like = {
      user_id: this.props.currentUser.id,
      likable_id: this.props.postId,
      likable_type: "post",
    }
    this.props.likePost(like);
  }

  render() {
    return (
      <div className="post-links">
        <a onClick={ this.handleLike }>
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
