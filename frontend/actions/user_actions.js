import * as UserAPIUtil from '../util/user_api_util';

export const RECEIVE_USER = 'RECEIVE_USER';
export const RECEIVE_MANY_USERS = 'RECEIVE_MANY_USERS';
export const RECEIVE_USER_ERROR = 'RECEIVE_USER_ERROR';
export const RECEIVE_PROFILE = 'RECEIVE_PROFILE';
export const RECEIVE_SEARCH_RESULTS = 'RECEIVE_SEARCH_RESULTS';

const receiveUser = (data) => (
  {
    type: RECEIVE_USER,
    data,
  }
);

const receiveManyUsers = data => (
  {
    type: RECEIVE_MANY_USERS,
    data,
  }
);

const receiveUserError = errors => (
  {
    type: RECEIVE_USER_ERROR,
    errors,
  }
);

const receiveProfile = data => (
  {
    type: RECEIVE_PROFILE,
    data,
  }
);

const receiveSearchResults = data => (
  {
    type: RECEIVE_SEARCH_RESULTS,
    data,
  }
);

export const requestUser = userId => dispatch => (
  UserAPIUtil.fetchUser(userId).then(
    data => dispatch(receiveUser(data)),
    errors => dispatch(receiveUserError(errors))
  )
);

export const fetchFriends = (userId) => dispatch => (
  UserAPIUtil.fetchFriends(userId).then(
    data => dispatch(receiveManyUsers(data)),
    errors => dispatch(receiveUserError(errors))
  )
);

export const fetchRequesters = () => dispatch => (
  UserAPIUtil.fetchRequesters().then(
    data => dispatch(receiveManyUsers(data)),
    errors => dispatch(receiveUserError(errors))
  )
);

export const updateUser = user => dispatch => (
  UserAPIUtil.updateUser(user).then(
    data => dispatch(receiveUser(data)),
    errors => dispatch(receiveUserError(errors))
  )
);

export const updatePhoto = formData => dispatch => (
  UserAPIUtil.updatePhoto(formData).then(
    data => dispatch(receiveUser(data)),
    errors => dispatch(receiveUserError(errors))
  )
);

export const addProfile = profile => dispatch => (
  UserAPIUtil.addProfile(profile).then(
    data => dispatch(receiveProfile(data)),
    errors => dispatch(receiveUserError(errors))
  )
);

export const updateProfile = profile => dispatch => (
  UserAPIUtil.updateProfile(profile).then(
    data => dispatch(receiveProfile(data)),
    errors => dispatch(receiveUserError(errors))
  )
);
export const removeProfile = profileId => dispatch => (
  UserAPIUtil.removeProfile(profileId).then(
    data => dispatch(receiveProfile(data)),
    errors => dispatch(receiveUserError(errors))
  )
);

export const searchUsers = search => dispatch => (
  UserAPIUtil.searchUsers(search).then(
    data => dispatch(receiveSearchResults(data)),
    errors => dispatch(receiveUserError(errors))
  )
);
