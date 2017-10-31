import * as UserAPIUtil from '../util/user_api_util';

export const RECEIVE_USER = 'RECEIVE_USER';
export const RECEIVE_USER_ERROR = 'RECEIVE_USER_ERROR';
export const RECEIVE_PROFILE = 'RECEIVE_PROFILE';

const receiveUser = (data) => (
  {
    type: RECEIVE_USER,
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

export const requestUser = userId => dispatch => (
  UserAPIUtil.fetchUser(userId).then(
    data => dispatch(receiveUser(data)),
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
