import { connect } from 'react-redux';

import NewsFeed from './news_feed';
import { fetchNewsFeed } from '../../actions/post_actions';
import { requestUser } from '../../actions/user_actions';
import { createPost, createPostPicture } from '../../actions/post_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.session.currentUser,
    posts: state.entities.posts,
    users: state.entities.users,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchNewsFeed: () => dispatch(fetchNewsFeed()),
    requestUser: userId => dispatch(requestUser(userId)),
    createPost: post => dispatch(createPost(post)),
    createPostPicture: formData => dispatch(createPostPicture(formData)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewsFeed);
