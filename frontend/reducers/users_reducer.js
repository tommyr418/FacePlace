import { RECEIVE_USER, RECEIVE_MANY_USERS } from '../actions/user_actions';
import { RECEIVE_MANY_POSTS } from '../actions/post_actions';
import { merge } from 'lodash';

const UsersReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_USER: {
      return Object.assign({}, state,
        { [action.data.user.id]: action.data.user });
    }
    case RECEIVE_MANY_USERS: {
      return _.merge({}, state, action.data);
    }
    case RECEIVE_MANY_POSTS: {
      return _.merge({}, state, action.data.users);
    }
    default:
      return state;
  }
};

export default UsersReducer;
