import * as CommentApiUtil from '../util/comment_api_util';
import { receivePost } from './post_actions';

export const postComment = comment => dispatch => (
  CommentApiUtil.createCommemt(comment).then(
    data => dispatch(receivePost(data))
  )
);
