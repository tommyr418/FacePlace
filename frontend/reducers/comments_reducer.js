import { RECEIVE_POST, RECEIVE_MANY_POSTS } from '../actions/post_actions';

const CommentReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_POST: {
      return Object.assign({}, state,
        { [action.data.id]: action.data });
    }
    case RECEIVE_MANY_POSTS: {
      return Object.assign({}, state, action.data.comments);
    }
    default:
      return state;
  }
};

export default CommentReducer;
