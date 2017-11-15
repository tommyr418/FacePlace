import { RECEIVE_SEARCH_RESULTS } from '../actions/user_actions';

const SearchReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_SEARCH_RESULTS: {
      return Object.assign({completed: true}, action.data);
    }
    default:
      return state;
  }
};

export default SearchReducer;
