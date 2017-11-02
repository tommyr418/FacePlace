import * as FriendAPIUtil from '../util/friend_api_util';

import { receiveCurrentUser, RECEIVE_CURRENT_USER } from './session_actions';

export const sendRequest = request => dispatch => (
  FriendAPIUtil.requestFriend(request).then(
    currentUser => dispatch(receiveCurrentUser(currentUser))
  )
);

export const addFriend = friend => dispatch => (
  FriendAPIUtil.addFriend(friend).then(
    currentUser => dispatch(receiveCurrentUser(currentUser))
  )
);

export const updateRequest = request => dispatch => (
  FriendAPIUtil.updateRequest(request).then(
    currentUser => dispatch(receiveCurrentUser(currentUser))
  )
);
