import { combineReducers } from 'redux';
import UsersReducer from './users_reducer';
import ProfilesReducer from './profiles_reducer';
import PostsReducer from './posts_reducer';

const EntitiesReducer = combineReducers({
  posts: PostsReducer,
  profiles: ProfilesReducer,
  users: UsersReducer,
});

export default EntitiesReducer;
