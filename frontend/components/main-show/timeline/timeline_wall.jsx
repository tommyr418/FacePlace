import React from 'react';
import { Link } from 'react-router-dom';
import TimelineForm from './timeline_form';

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
