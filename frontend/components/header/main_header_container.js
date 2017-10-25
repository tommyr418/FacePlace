import { connect } from 'react-redux';

import { logout, login } from '../../actions/session_actions';
import MainHeader from './user_nav';

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.currentUser,
  };
};

const mapDispatchToProps = (dispatch) => (
  {
    logout: () => dispatch(logout()),
    login: (user) => dispatch(login(user)),
  }
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainHeader);
