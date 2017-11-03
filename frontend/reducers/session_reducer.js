import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_POST } from '../actions/post_actions';
import { merge } from 'lodash';

const SessionReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_CURRENT_USER: {
      return Object.assign({}, state, { currentUser: action.currentUser });
    }
    case RECEIVE_POST: {
      return _.merge({}, state, { currentUser: { news_feed: [action.data.id].concat(state.currentUser.news_feed) }})
    }
    default:
      return state;
  }
};

export default SessionReducer;
