import * as PostAPIUtil from '../util/post_api_util';

export const RECEIVE_POST = "RECEIVE_POST";
export const RECEIVE_MANY_POSTS = "RECEIVE_MANY_POSTS";
export const RECEIVE_POST_ERRORS = "RECEIVE_POST_ERRORS";

export const receivePost = data => (
  {
    type: RECEIVE_POST,
    data
  }
);

export const receivePosts = data => (
  {
    type: RECEIVE_MANY_POSTS,
    data
  }
);

export const receivePostErrors = errors => (
  {
    type: RECEIVE_POST_ERRORS,
    errors
  }
);

export const fetchPosts = () => dispatch => (
  PostAPIUtil.fetchPosts().then(
    data => dispatch(receivePosts(data)),
    errors => dispatch(receivePostErrors(errors))
  )
);

export const fetchPost = postId => dispatch => (
  PostAPIUtil.fetchPost(postId).then(
    data => dispatch(receivePost(data)),
    errors => dispatch(receivePostErrors(errors))
  )
);
export const createPost = post => dispatch => (
  PostAPIUtil.createPost(post).then(
    data => dispatch(receivePost(data)),
    errors => dispatch(receivePostErrors(errors))
  )
);
export const updatePost = post => dispatch => (
  PostAPIUtil.updatePost(post).then(
    data => dispatch(receivePost(data)),
    errors => dispatch(receivePostErrors(errors))
  )
);
export const deletePost = (postId) => dispatch => (
  PostAPIUtil.deletePost(postId).then(
    data => dispatch(receivePosts(data)),
    errors => dispatch(receivePostErrors(errors))
  )
);
