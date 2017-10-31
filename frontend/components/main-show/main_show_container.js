import { connect } from 'react-redux';

import { requestUser,
  updateUser,
  updateProfilePic } from '../../actions/user_actions';
import MainShow from './main_show';

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.entities.users[ownProps.match.params.userId],
    userId: ownProps.match.params.userId,
    currentUser: state.session.currentUser
  };
};

const mapDispatchToProps = (dispatch) => (
  {
    requestUser: userId => dispatch(requestUser(userId)),
    updateUser: user => dispatch(updateUser(user)),
    updateProfilePic: formData => dispatch(updateProfilePic(formData)),
  }
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainShow);
