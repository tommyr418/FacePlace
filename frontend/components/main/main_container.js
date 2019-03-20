import { connect } from 'react-redux';

import { signup, receiveSessionErrors } from '../../actions/session_actions';
import { createPost, createPostPicture } from '../../actions/post_actions';
import Main from './main';


const mapStateToProps = (state) => {
  return {
    currentUser: state.session.currentUser,
    errors: state.errors.registration,
  };
};

const mapDispatchToProps = (dispatch) => (
  {
    signup: (user) => dispatch(signup(user)),
    clearSessionErrors: () => dispatch(receiveSessionErrors([])),
    createPost: post => dispatch(createPost(post)),
    createPostPicture: formData => dispatch(createPostPicture(formData)),
  }
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
