import { connect } from 'react-redux';

import TimelineWall from './timeline_wall';
import { fetchPosts } from '../../../actions/post_actions';
import { fetchFriends } from '../../../actions/user_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.entities.users[ownProps.match.params.userId],
    profile: state.entities.profiles[ownProps.match.params.userId],
    userId: ownProps.match.params.userId,
    currentUser: state.session.currentUser,
    posts: state.entities.posts,
    users: state.entities.users,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchPosts: () => dispatch(fetchPosts()),
    fetchFriends: userId => dispatch(fetchFriends(userId)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TimelineWall);
