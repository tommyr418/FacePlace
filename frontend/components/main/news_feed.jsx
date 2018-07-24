import React from 'react';
import { Link } from 'react-router-dom';

import Comments from '../posts/comments';
import CommentForm from '../posts/comment_form';
import PostLinksContainer from '../posts/post_links_container';

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
    const timeStamp = Date.parse(this.props.posts[postId].created_at);
    const timeDifference = Date.now() - timeStamp;
    let timeString;

    if (timeDifference < 60000) {
      timeString = Math.floor(timeDifference / 1000) + " s";
    } else if (timeDifference < 3600000) {
      timeString = Math.floor(timeDifference / 60000) + " m";
    } else if (timeDifference < 86400000) {
      timeString = Math.floor(timeDifference / 3600000) + " h";
    } else if (timeDifference < 604800000) {
      timeString = Math.floor(timeDifference / 86400000) + " d";
    } else if (timeDifference < 2419200000) {
      timeString = Math.floor(timeDifference / 604800000) + " w";
    } else if (timeDifference < 125798400000) {
      timeString = Math.floor(timeDifference / 2419200000) + " m";
    } else {
      timeString = Math.floor(timeDifference / 125798400000) + " y";
    }

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
          <span>{ timeString }</span>
        </div>

        <div className="post-body">
          { post.body }
          {post.image_url ? <img src={ post.image_url }/> : null}
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
