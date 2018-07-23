import { connect } from 'react-redux';

import Welcome from './welcome';
import { login } from '../../actions/session_actions';

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    login: (user) => dispatch(login(user)),
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Welcome);
