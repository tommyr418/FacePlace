import React from 'react';

class PostLinks extends React.Component {
  constructor(props) {
    super(props);
    this.handleComment = this.handleComment.bind(this);
    this.handleLike = this.handleLike.bind(this);
    this.state = {
      currentUserLikes: this.props.post.likes
                        .includes(this.props.currentUser.id) ?
                        true : false,
      likesLength: this.props.post.likes.length,
    };
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
    this.props.likePost(like).then(
      () => {
        this.setState({
          currentUserLikes: this.props.post.likes
                            .includes(this.props.currentUser.id) ?
                            true : false,
          likesLength: this.props.post.likes.length,
        })
      }
    );
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

        { this.props.post.likes.length === 0 ? null
          :
          <div className="post-likes">
            <i className="fa fa-thumbs-up" aria-hidden="true"></i>
            <span>
              { this.state.currentUserLikes ?
              "You " : null }
              { this.state.currentUserLikes && this.state.likesLength > 1}
              like this post
            </span>
          </div>
        }
      </div>
    );
  }
}

export default PostLinks;
