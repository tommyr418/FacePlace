import { combineReducers } from 'redux';
import UsersReducer from './users_reducer';
import ProfilesReducer from './profiles_reducer';

const EntitiesReducer = combineReducers({
  profiles: ProfilesReducer,
  users: UsersReducer,
});

export default EntitiesReducer;
