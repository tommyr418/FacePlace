import { connect } from 'react-redux';

import TimelineWall from './timeline_wall';
import { fetchWallPosts } from '../../../actions/post_actions';
import { requestUser } from '../../../actions/user_actions';
import { createPost, createPostPicture } from '../../../actions/post_actions';
import { postComment } from '../../../actions/comment_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.entities.users[ownProps.match.params.userId],
    profile: state.entities.profiles[ownProps.match.params.userId],
    userId: ownProps.match.params.userId,
    currentUser: state.session.currentUser,
    posts: state.entities.posts,
    users: state.entities.users,
    comments: state.entities.comments,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchWallPosts: (userId) => dispatch(fetchWallPosts(userId)),
    requestUser: userId => dispatch(requestUser(userId)),
    createPost: post => dispatch(createPost(post)),
    createPostPicture: formData => dispatch(createPostPicture(formData)),
    postComment: (comment) => dispatch(postComment(comment)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TimelineWall);
