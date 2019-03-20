import { combineReducers } from 'redux';
import SessionReducer from './session/session_reducer';
import ErrorsReducer from './errors/errors_reducer';
import EntitiesReducer from './entities/entities_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  errors: ErrorsReducer,
  entities: EntitiesReducer,
});

export default RootReducer;
