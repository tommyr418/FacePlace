import { connect } from 'react-redux';

import TimelineIntro from './timeline_intro';
import { requestUser } from '../../../actions/user_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.entities.users[ownProps.match.params.userId],
    profile: state.entities.profiles[ownProps.match.params.userId],
    userId: ownProps.match.params.userId,
    currentUser: state.session.currentUser,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    requestUser: userId => dispatch(requestUser(userId)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TimelineIntro);
