import { connect } from 'react-redux';

import { login } from '../../actions/session_actions';
import UserNav from './user_nav';

const mapDispatchToProps = (dispatch) => (
  {
    login: (user) => dispatch(login(user)),
  }
);

export default connect(
  null,
  mapDispatchToProps
)(LoginForm);
