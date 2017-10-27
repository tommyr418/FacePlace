import { connect } from 'react-redux';

import { requestUser,
  addProfile,
  updateProfile,
  removeProfile } from '../../../actions/user_actions';
import MainAbout from './main_about';

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.entities.users[ownProps.match.params.userId],
    profile: state.entities.profiles[ownProps.match.params.userId],
    userId: ownProps.match.params.userId
  };
};

const mapDispatchToProps = (dispatch) => (
  {
    requestUser: userId => dispatch(requestUser(userId)),
    addProfile: profile => dispatch(addProfile(profile)),
    updateProfile: profile => dispatch(updateProfile(profile)),
    removeProfile: profileId => dispatch(removeProfile(profileId)),
  }
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainAbout);
