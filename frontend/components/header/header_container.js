import { connect } from 'react-redux';

import { logout, login } from '../../actions/session_actions';
import { fetchRequesters } from '../../actions/user_actions';
import { addFriend, updateRequest } from "../../actions/friend_actions";
import Header from './header';

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.currentUser,
    errors: state.errors.session,
    users: state.entities.users,
  };
};

const mapDispatchToProps = (dispatch) => (
  {
    logout: () => dispatch(logout()),
    login: (user) => dispatch(login(user)),
    fetchRequesters: () => dispatch(fetchRequesters()),
    addFriend: friend => dispatch(addFriend(friend)),
    updateRequest: request => dispatch(updateRequest(request)),
  }
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
