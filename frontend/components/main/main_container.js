import { connect } from 'react-redux';

import { signup, receiveSessionErrors } from '../../actions/session_actions';
import Main from './main';

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.currentUser,
    errors: state.errors.session,
  };
};

const mapDispatchToProps = (dispatch) => (
  {
    signup: (user) => dispatch(signup(user)),
    clearSessionErrors: () => dispatch(receiveSessionErrors([])),
  }
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
