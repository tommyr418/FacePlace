import { connect } from 'react-redux';

import { signup } from '../../actions/session_actions';
import MainShow from './main_show';

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
)(MainShow);
