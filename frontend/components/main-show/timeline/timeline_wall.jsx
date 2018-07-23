import React from 'react';
import { Link } from 'react-router-dom';

import PostForm from '../../posts/post_form';
import Comments from '../../posts/comments';
import CommentForm from '../../posts/comment_form';
import PostLinksContainer from '../../posts/post_links_container';

class TimelineWall extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    };
    this.mapPosts = this.mapPosts.bind(this);
  }

  componentDidMount() {
    this.props.fetchWallPosts(this.props.userId).then(
      () => {
        this.setState({
          loading: false,
        });
      }
    );
  }

  componentWillReceiveProps(newProps) {
    if(!this.props.user.wall_posts) {
      return;
    }
    const postsIds = Object.keys(newProps.posts).map((id) => {
      return parseInt(id);
    });
    let needUpdate = false;
    for (var i = 0; i < this.props.user.wall_posts.length; i++) {
      if(!postsIds.includes(this.props.user.wall_posts[i])) {
        needUpdate = true;
        break;
      }
    }
    if (needUpdate) {
      this.props.fetchWallPosts(this.props.userId);
    }
  }

  mapPosts(postId) {
    const post = this.props.posts[postId];
    if(!post) {
      return null;
    }
    const authorId = this.props.posts[postId].author_id;
    const author = this.props.users[authorId];
    return (
      <div className="post"
        key={ postId }>
        <div className="post-header">
          <img src={ author.image_url }/>
          <Link to={ `/users/${author.id}` }>
            { author.fname } { author.lname }
          </Link>

          <i className="fa fa-caret-right" aria-hidden="true"></i>

          <Link to={ `/users/${this.props.user.id}` }>
            { this.props.user.fname } { this.props.user.lname }
          </Link>
        </div>

        <div className="post-body">
          { post.body }
          { post.image_url ? <img src={ post.image_url }/> : null }
        </div>

        <PostLinksContainer
          postId={ postId }/>

        <Comments
          postId={ postId }
          users={ this.props.users }
          posts={ this.props.posts }
          comments={ this.props.comments }/>

        <CommentForm
          postId={ postId }
          currentUser={ this.props.currentUser }
          postComment={ this.props.postComment }/>
      </div>
    );
  }

  render() {
    if (this.state.loading) {
      return null;
    }

    if(!this.props.user || !this.props.user.wall_posts) {
      return null;
    }

    const posts = this.props.user.wall_posts.map(
      this.mapPosts
    );

    return (
      <div>
        <div className="post-form">
          <PostForm
            currentUser={ this.props.currentUser }
            user={ this.props.user }
            createPost={ this.props.createPost }
            createPostPicture={ this.props.createPostPicture }/>
        </div>

        <div className="post-index">
          { posts }
        </div>
      </div>
    );
  }
}

 export default TimelineWall;
