import * as LikeApiUtil from '../util/like_api_util';

export const RECEIVE_POST_LIKE = "RECEIVE_POST_LIKE";
export const RECEIVE_COMMENT_LIKE = "RECEIVE_COMMENT_LIKE";
export const RECEIVE_LIKE_ERRORS = "RECEIVE_LIKE_ERRORS";

export const receivePostLike = data => (
  {
    type: RECEIVE_POST_LIKE,
    data
  }
);

export const receiveCommentLike = data => (
  {
    type: RECEIVE_COMMENT_LIKE,
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
    data => dispatch(receivePostLike(data)),
    errors => dispatch(receiveLikeErrors(errors))
  )
);

export const likeComment = like => dispatch => (
  LikeApiUtil.likeComment(like).then(
    data => dispatch(receiveCommentLike(data)),
    errors => dispatch(receiveLikeErrors(errors))
  )
);

export const unlikePost = postId => dispatch => (
  LikeApiUtil.unlikePost(postId).then(
    data => dispatch(receivePostLike(data)),
    errors => dispatch(receiveLikeErrors(errors))
  )
);

export const unlikeComment = commentId => dispatch => (
  LikeApiUtil.unlikeComment(commentId).then(
    data => dispatch(receiveCommentLike(data)),
    errors => dispatch(receiveLikeErrors(errors))
  )
);
