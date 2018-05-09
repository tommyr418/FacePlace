import { connect } from 'react-redux';

import RecentNews from './recent_news';
import { fetchCurrentNews } from '../../actions/news_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    news: state.entities.news,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchCurrentNews: () => dispatch(fetchCurrentNews()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RecentNews);
