import { connect } from 'react-redux';

import { requestUser } from '../../actions/user_actions';
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
    requestUser: (userId) => dispatch(requestUser(userId)),
  }
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainShow);
