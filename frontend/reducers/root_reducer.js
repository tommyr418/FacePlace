import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import ErrorsReducer from './errors_reducer';
import UsersReducer from './users_reducer';
import ProfilesReducer from './profiles_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  errors: ErrorsReducer,
  profiles: ProfilesReducer,
  users: UsersReducer,
});

export default RootReducer;
