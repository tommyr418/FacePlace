import * as CommentApiUtil from '../util/comment_api_util';
import { receivePost } from './post_actions';

export const RECEIVE_COMMENT_ERRORS = "RECEIVE_COMMENT_ERRORS";

export const receiveCommentErrors = errors => (
  {
    type: RECEIVE_COMMENT_ERRORS,
    errors
  }
);

export const postComment = comment => dispatch => (
  CommentApiUtil.createComment(comment).then(
    data => dispatch(receivePost(data)),
    errors => dispatch(receiveCommentErrors(errors))
  )
);
