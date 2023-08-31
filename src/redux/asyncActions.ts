const redux = require('redux');
const thunk = require('redux-thunk').default;
const axios = require('axios');
const createStore = redux.createStore;
const applyMiddleware = redux.applyMiddleware;

// actions
const FETCH_USERS_REQUESTS = 'FETCH_USERS_REQUESTS';
const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';
const FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE';

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

// reducers
const initialState = {
  loading: false,
  data: [],
  error: '',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_REQUESTS:
      return { ...state, loading: true };
      break;
    case FETCH_USERS_SUCCESS:
      return { ...state, loading: false, error: '', data: action?.payload };
      break;
    case FETCH_USERS_REQUESTS:
      return { ...state, loading: false, error: action?.payload, data: [] };
      break;
    default:
      return state;
      break;
  }
};

const fetchUsers = () => {
  return function (dispatch) {
    dispatch(fetchUsersRequests());
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        const userId = response?.data?.map((u) => uId);
        dispatch(fetchUsersSuccess(userId));
      })
      .catch((error) => {
        dispatch(fetchUsersFailure(error));
      });
  };
};

const store = createStore(reducer, applyMiddleware(thunk));
