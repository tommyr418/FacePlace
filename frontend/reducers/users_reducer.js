import { RECEIVE_USER } from '../actions/user_actions';

const UsersReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_USER: {
      return Object.assign({}, state,
        { [action.data.user.id]: action.data.user });
    }
    default:
      return state;
  }
};

export default UsersReducer;
