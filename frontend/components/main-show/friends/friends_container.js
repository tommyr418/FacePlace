import { connect } from 'react-redux';

import { requestUser,
  requestFriends } from '../../../actions/user_actions';
import MainAbout from './main_about';

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.entities.users[ownProps.match.params.userId],
    profile: state.entities.profiles[ownProps.match.params.userId],
    userId: ownProps.match.params.userId,
    currentUser: state.session.currentUser,
  };
};

const mapDispatchToProps = (dispatch) => (
  {
    requestUser: userId => dispatch(requestUser(userId)),
    requestFriends: () => dispatch(requestFriends()),
  }
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainAbout);
