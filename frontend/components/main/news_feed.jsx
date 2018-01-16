import React from 'react';
import { Link } from 'react-router-dom';

import Comments from '../posts/comments';
import CommentForm from '../posts/comment_form';

class NewsFeed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    };
    this.mapPosts = this.mapPosts.bind(this);
  }

  componentDidMount() {
    this.props.fetchNewsFeed().then(
      () => {
        this.setState({
          loading: false,
        });
      }
    );
  }

  componentWillReceiveProps(newProps) {
    const postsIds = Object.keys(newProps.posts).map((id) => {
      return parseInt(id);
    });
    let needUpdate = false;
    for (var i = 0; i < this.props.currentUser.news_feed.length; i++) {
      if(!postsIds.includes(this.props.currentUser.news_feed[i])) {
        needUpdate = true;
        break;
      }
    }
    if (needUpdate) {
      this.props.fetchNewsFeed();
    }
  }

  mapPosts(postId) {
    const post = this.props.posts[postId];
    const authorId = this.props.posts[postId].author_id;
    const author = this.props.users[authorId];
    const wallId = post.wall_id;
    const wall = this.props.users[wallId];
    return (
      <div className="post"
        key={ postId }>
        <div className="post-header">
          <img src={ author.image_url }/>
          <Link to={ `/users/${author.id}` }>
            { author.fname } { author.lname }
          </Link>

          <i className="fa fa-caret-right" aria-hidden="true"></i>

          <Link to={ `/users/${wall.id}` }>
            { wall.fname } { wall.lname }
          </Link>
        </div>

        <div className="post-body">
          { post.body }
          {post.image_url ? <img src={ post.image_url }/> : null}
        </div>

        <div className="post-links">
          <a>
            <i className="fa fa-thumbs-o-up" aria-hidden="true"></i>
            Like
          </a>

          <a>
            <i className="fa fa-comment-o" aria-hidden="true"></i>
            Comment
          </a>
        </div>

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

    if(Object.keys(this.props.posts).length === 0) {
      return null;
    }

    const posts = this.props.currentUser.news_feed.map(
      this.mapPosts
    );

    return (
      <div className="post-index">
        { posts }
      </div>
    );
  }
}

 export default NewsFeed;
