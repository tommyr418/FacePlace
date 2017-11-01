import { connect } from 'react-redux';

import { logout, login,
  receiveSessionErrors } from '../../actions/session_actions';
import { fetchRequesters } from '../../actions/user_actions';
import MainHeader from './main_header';

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.currentUser,
    errors: state.errors.session,
    users: state.entities.users,
  };
};

const mapDispatchToProps = (dispatch) => (
  {
    logout: () => dispatch(logout()),
    login: (user) => dispatch(login(user)),
    fetchRequesters: () => dispatch(fetchRequesters()),
  }
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainHeader);
