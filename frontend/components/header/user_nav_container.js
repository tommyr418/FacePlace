import { connect } from 'react-redux';

import { logout } from '../../actions/session_actions';
import UserNav from './user_nav';

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.currentUser,
  };
};

const mapDispatchToProps = (dispatch) => (
  {
    logout: () => dispatch(logout()),
  }
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserNav);
