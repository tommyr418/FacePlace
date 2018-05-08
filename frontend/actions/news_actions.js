import * as NewsAPIUtil from '../util/news_api_util';

export const RECEIVE_CURRENT_NEWS = 'RECEIVE_CURRENT_NEWS';

export const receiveCurrentNews = data => (
  {
    type: RECEIVE_CURRENT_NEWS,
    data,
  }
);

export const fetchCurrentNews = () => dispatch => (
  NewsAPIUtil.requestCurrentNews().then(
    (data) => dispatch(receiveCurrentNews(data))
  )
);
