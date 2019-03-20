import {
  RECEIVE_REGISTRATION_ERRORS,
  RECEIVE_CURRENT_USER } from '../../actions/session_actions';

const SessionErrorsReducer = (state = [], action) => {
  switch(action.type) {
    case RECEIVE_REGISTRATION_ERRORS: {
      return action.errors;
    }
    case RECEIVE_CURRENT_USER: {
      return [];
    }
    default:
      return state;
  }
};

export default SessionErrorsReducer;
