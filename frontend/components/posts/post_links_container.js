import { connect } from 'react-redux';

import { likePost, unlikePost } from '../../actions/like_actions';
import PostLinks from './post_links';

const mapStateToProps = (state, ownProps) => {
  return {
    postId: ownProps.postId,
    post: state.entities.posts[ownProps.postId],
    currentUser: state.session.currentUser,
    users: state.entities.users,
  };
};

const mapDispatchToProps = (dispatch) => (
  {
    likePost: like => dispatch(likePost(like)),
    unlikePost: postId => dispatch(unlikePost(postId)),
  }
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostLinks);
