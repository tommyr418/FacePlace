import { RECEIVE_SESSION_ERRORS } from 'RECEIVE_SESSION_ERRORS';

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
