import { connect } from 'react-redux';

import { likePost } from '../../actions/like_actions';
import PostLinks from './post_links';

const mapStateToProps = (state, ownProps) => {
  return {
    postId: ownProps.postId,
    currentUser: state.session.currentUser
  };
};

const mapDispatchToProps = (dispatch) => (
  {
    likePost: like => dispatch(likePost(like)),
  }
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostLinks);
