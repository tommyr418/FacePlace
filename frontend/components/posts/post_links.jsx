import React from 'react';
import ReactToolTip from 'react-tooltip';

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
    if(this.state.currentUserLikes) {
      this.props.unlikePost(like).then(
        () => {
          this.setState({
            currentUserLikes: this.props.post.likes
            .includes(this.props.currentUser.id) ?
            true : false,
            likesLength: this.props.post.likes.length,
          });
        }
      );
    } else {
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

  }

  render() {
    const likers = this.props.post.likes.map(
      (id) => {
        if(this.props.users[id].id === this.props.currentUser.id) {
          return null;
        }
        return (
          <li key={ id }>{ this.props.users[id].fname } { this.props.users[id].lname }</li>
        );
      }
    );
    return (
      <div className="post-links">

        { this.props.post.likes.length === 0 ? null
          :
          <div id="post-likes">
            <i className="fa fa-thumbs-up" aria-hidden="true"></i>
            <span>
              { this.state.currentUserLikes ?
              "You " : null }
              { this.state.currentUserLikes && this.state.likesLength > 1 ?
                "and " : null}
              { this.state.currentUserLikes && this.state.likesLength > 1 ?
                <a data-tip data-for={ `likes-${this.props.postId}` }>{ this.state.likesLength - 1 }
                  { this.state.likesLength > 2 ? " people " : " person "}</a> : null}
              { !this.state.currentUserLikes && this.state.likesLength >= 1 ?
                <a data-tip data-for={ `likes-${this.props.postId}` }>{ this.state.likesLength }
                  { this.state.likesLength > 1 ? " people " : " person "}</a> : null}
              liked this post
            </span>
            <ReactToolTip id={ `likes-${this.props.postId}` }>
              <ul>
                { likers }
              </ul>
            </ReactToolTip>
          </div>
        }

        <div id="post-links-div">
          <a onClick={ this.handleLike }>
            <i className="fa fa-thumbs-o-up" aria-hidden="true"></i>
            Like
          </a>

          <a onClick={ this.handleComment }>
            <i className="fa fa-comment-o" aria-hidden="true"></i>
            Comment
          </a>
        </div>
      </div>
    );
  }
}

export default PostLinks;
