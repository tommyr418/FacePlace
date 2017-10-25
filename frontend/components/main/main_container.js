import { connect } from 'react-redux';

import { signup } from '../../actions/session_actions';
import Main from './main';

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.currentUser,
  };
};

const mapDispatchToProps = (dispatch) => (
  {
    signup: (user) => dispatch(signup(user)),
  }
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
