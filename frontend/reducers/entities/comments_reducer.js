import { RECEIVE_MANY_POSTS } from '../../actions/post_actions';
import { RECEIVE_COMMENT } from '../../actions/comment_actions';
import { RECEIVE_COMMENT_LIKE } from '../../actions/like_actions';

const CommentReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_COMMENT: {
      return Object.assign({}, state,
        { [action.data.id]: action.data });
    }
    case RECEIVE_MANY_POSTS: {
      return Object.assign({}, state, action.data.comments);
    }
    case RECEIVE_COMMENT_LIKE: {
      return _.merge({}, state, {
        [action.data.likable_id]: {
          likes: state[action.data.likable_id]
          .likes.concat([action.data.user_id])
        }
      });
    }
    default:
      return state;
  }
};

export default CommentReducer;
