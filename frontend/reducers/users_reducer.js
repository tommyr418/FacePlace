import { RECEIVE_USER, RECEIVE_MANY_USERS } from '../actions/user_actions';

const UsersReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_USER: {
      return Object.assign({}, state,
        { [action.data.user.id]: action.data.user });
    }
    case RECEIVE_MANY_USERS: {
      return Object.assign({}, state, action.data);
    }
    default:
      return state;
  }
};

export default UsersReducer;
