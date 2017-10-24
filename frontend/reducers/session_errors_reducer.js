import { RECEIVE_SESSION_ERRORS } from '../actions/session_actions';

const SessionErrorsReducer = (state = [], action) => {
  switch(action.type) {
    case RECEIVE_SESSION_ERRORS: {
      return [].concat(state).concat(action.errors);
    }
    default:
      return state;
  }
};

export default SessionErrorsReducer;
