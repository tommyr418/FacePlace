import { connect } from 'react-redux';

import NewsFeed from './news_feed';
import { fetchNewsFeed } from '../../actions/post_actions';
import { postComment } from '../../actions/comment_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.session.currentUser,
    posts: state.entities.posts,
    users: state.entities.users,
    comments: state.entities.comments,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchNewsFeed: () => dispatch(fetchNewsFeed()),
    postComment: (comment) => dispatch(postComment(comment)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewsFeed);
