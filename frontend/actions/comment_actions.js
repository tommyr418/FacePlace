import * as CommentApiUtil from '../util/comment_api_util';

export const RECEIVE_COMMENT = "RECEIVE_COMMENT";
export const RECEIVE_COMMENT_ERRORS = "RECEIVE_COMMENT_ERRORS";

export const receiveComment = data => (
  {
    type: RECEIVE_COMMENT,
    data
  }
);

export const receiveCommentErrors = errors => (
  {
    type: RECEIVE_COMMENT_ERRORS,
    errors
  }
);

export const postComment = comment => dispatch => (
  CommentApiUtil.createComment(comment).then(
    data => dispatch(receiveComment(data)),
    errors => dispatch(receiveCommentErrors(errors))
  )
);
