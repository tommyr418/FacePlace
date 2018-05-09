import { RECEIVE_CURRENT_NEWS } from '../actions/new_actions';

const NewsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_CURRENT_NEWS: {
      return Object.assign({}, state, action.data);
    }
    default:
      return state;
  }
};

export default NewsReducer;
