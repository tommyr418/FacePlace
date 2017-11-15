import { connect } from 'react-redux';

import { searchUsers } from '../../actions/user_actions';
import Search from './search';

const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.session.currentUser,
    search: state.entities.search,
  };
};

const mapDispatchToProps = (dispatch) => (
  {
    searchUsers: search => dispatch(searchUsers(search)),
  }
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
