import { connect } from 'react-redux';

import { requestUser,
  fetchFriends } from '../../../actions/user_actions';
import Friends from './friends';

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.entities.users[ownProps.match.params.userId],
    users: state.entities.users,
  };
};

const mapDispatchToProps = (dispatch) => (
  {
    fetchFriends: userId => dispatch(fetchFriends(userId)),
  }
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Friends);
