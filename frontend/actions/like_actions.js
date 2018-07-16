import * as LikeApiUtil from '../util/like_api_util';

export const RECEIVE_LIKE = "RECEIVE_LIKE";
export const RECEIVE_LIKE_ERRORS = "RECEIVE_LIKE_ERRORS";

export const receiveLike = data => (
  {
    type: RECEIVE_LIKE,
    data
  }
);

export const receiveLikeErrors = errors => (
  {
    type: RECEIVE_LIKE_ERRORS,
    errors
  }
);

export const likePost = like => dispatch => (
  LikeApiUtil.likePost(like).then(
    data => dispatch(receiveLike(data)),
    errors => dispatch(receiveLikeErrors(errors))
  )
);

export const likeComment = like => dispatch => (
  LikeApiUtil.likeComment(like).then(
    data => dispatch(receiveLike(data)),
    errors => dispatch(receiveLikeErrors(errors))
  )
);
