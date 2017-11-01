import { connect } from 'react-redux';

import { requestUser,
  fetchFriends } from '../../../actions/user_actions';
import Friends from './friends';

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.entities.users[ownProps.match.params.userId],
    profile: state.entities.profiles[ownProps.match.params.userId],
    userId: ownProps.match.params.userId,
    currentUser: state.session.currentUser,
    users: state.entities.users,
  };
};

const mapDispatchToProps = (dispatch) => (
  {
    requestUser: userId => dispatch(requestUser(userId)),
    fetchFriends: userId => dispatch(fetchFriends(userId)),
  }
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Friends);
