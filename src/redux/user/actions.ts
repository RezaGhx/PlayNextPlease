import axios from 'axios';
import { FETCH_USERS_REQUESTS, FETCH_USERS_SUCCESS, FETCH_USERS_FAILURE } from './types';

function fetchUsersRequests() {
  return {
    type: FETCH_USERS_REQUESTS,
  };
}

function fetchUsersSuccess(users) {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: users,
  };
}

function fetchUsersFailure(error) {
  return {
    type: FETCH_USERS_FAILURE,
    payload: error,
  };
}

export const fetchUsers = () => {
  return function (dispatch) {
    dispatch(fetchUsersRequests());
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        const users = response?.data;
        dispatch(fetchUsersSuccess(users));
      })
      .catch((error) => {
        dispatch(fetchUsersFailure(error?.message));
      });
  };
};