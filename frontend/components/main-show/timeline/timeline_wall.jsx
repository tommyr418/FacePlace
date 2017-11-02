import React from 'react';

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
      <div id="wall-post"
        key={ postId }>
        <img src={ author.image_url }/>
        <span>
          { author.fname } { author.lname }
        </span>

        <span>
          { this.props.user.fname } { this.props.user.lname }
        </span>

        <div>
          { post.body }
        </div>
      </div>
    );
  }

  render() {
    if (Object.keys(this.props.posts).length < this.props.user.wall_posts.length) {
      return null;
    }
    if (Object.keys(this.props.users).length < this.props.user.wall_posts.length) {
      return null;
    }

    const posts = this.props.user.wall_posts.map(
      this.mapPosts
    );

    return (
      <div id="wall">
        { posts }
      </div>
    );
  }
}

 export default TimelineWall;
