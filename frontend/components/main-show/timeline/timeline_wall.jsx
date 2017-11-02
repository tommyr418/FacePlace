import React from 'react';
import { Link } from 'react-router-dom';
import TimelineForm from './timeline_form';

class TimelineWall extends React.Component {
  constructor(props) {
    super(props);
    this.mapPosts = this.mapPosts.bind(this);
  }

  componentDidMount() {
    this.props.fetchPosts();
    this.props.fetchFriends(this.props.userId);
  }

  mapPosts(postId) {
    const post = this.props.posts[postId];
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
        </div>
      </div>
    );
  }

  render() {
    if(!this.props.user || !this.props.posts || !this.props.users || !this.props.user.wall_posts) {
      return (
        <div>
          <div className="post-form">
            <TimelineForm
              currentUser={ this.props.currentUser }
              user={ this.props.user }
              createPost={ this.props.createPost }/>
          </div>

          <div className="post-index">
          </div>
        </div>
      );
    }

    for (var i = 0; i < this.props.user.wall_posts.length; i++) {
      const postId = this.props.user.wall_posts[i];
      const post = this.props.posts[postId];
      if (!post) {
        return (
          <div>
            <div className="post-form">
              <TimelineForm
                currentUser={ this.props.currentUser }
                user={ this.props.user }
                createPost={ this.props.createPost }/>
            </div>

            <div className="post-index">
            </div>
          </div>
        );
      }
      const author = this.props.users[post.author_id];
      if(!author) {
        return (
          <div>
            <div className="post-form">
              <TimelineForm
                currentUser={ this.props.currentUser }
                user={ this.props.user }
                createPost={ this.props.createPost }/>
            </div>

            <div className="post-index">
            </div>
          </div>
        );
      }
    }

    const posts = this.props.user.wall_posts.map(
      this.mapPosts
    );

    return (
      <div>
        <div className="post-form">
          <TimelineForm
            currentUser={ this.props.currentUser }
            user={ this.props.user }
            createPost={ this.props.createPost }/>
        </div>

        <div className="post-index">
          { posts }
        </div>
      </div>
    );
  }
}

 export default TimelineWall;
