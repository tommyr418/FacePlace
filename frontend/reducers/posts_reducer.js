import { RECEIVE_POST, RECEIVE_MANY_POSTS } from '../actions/post_actions';
import { RECEIVE_COMMENT } from '../actions/comment_actions';
import { merge } from 'lodash';

const PostsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_POST: {
      return Object.assign({}, state,
        { [action.data.id]: action.data });
    }
    case RECEIVE_MANY_POSTS: {
      return Object.assign({}, state, action.data.posts);
    }
    case RECEIVE_COMMENT: {
      return _.merge({}, state, {
        [action.data.post_id]: {
          comments: state[action.data.post_id].comments.concat([action.data.id])
        }
      });
    }
    default:
      return state;
  }
};

export default PostsReducer;
