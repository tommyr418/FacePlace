import { connect } from 'react-redux';

import { requestUser,
  updateUser,
  updatePhoto } from '../../actions/user_actions';
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
    updatePhoto: formData => dispatch(updatePhoto(formData)),
  }
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainShow);
