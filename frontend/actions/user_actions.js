import * as UserAPIUtil from '../util/user_api_util';

export const RECEIVE_USER = 'RECEIVE_USER';
export const RECEIVE_USER_ERROR = 'RECEIVE_USER_ERROR';

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

export const requestUser = userId => dispatch => (
  UserAPIUtil.fetchUser(userId).then(
    data => dispatch(receiveUser(data)),
    errors => dispatch(receiveUserError(errors))
  )
);
