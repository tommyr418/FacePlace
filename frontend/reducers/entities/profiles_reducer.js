import { RECEIVE_USER, RECEIVE_PROFILE } from '../../actions/user_actions';

const ProfilesReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_USER: {
      return Object.assign({}, state,
        { [action.data.profile.userId]: action.data.profile });
    }
    case RECEIVE_PROFILE: {
      return Object.assign({}, state,
        { [action.data.profile.userId]: action.data.profile });
    }
    default:
      return state;
  }
};

export default ProfilesReducer;
