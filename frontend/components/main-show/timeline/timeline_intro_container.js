import { connect } from 'react-redux';

import TimelineIntro from './timeline_intro';

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.entities.users[ownProps.match.params.userId],
    profile: state.entities.profiles[ownProps.match.params.userId],
    userId: ownProps.match.params.userId,
    currentUser: state.session.currentUser,
  };
};

const mapDispatchToProps = (dispatch) => (
  {
  }
);

export default connect(
  mapStateToProps,
  null
)(TimelineIntro);
