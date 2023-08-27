const redux = require('redux');
const createStore = redux.createStore;

// actions
const FETCH_USERS_REQUESTS = 'FETCH_USERS_REQUESTS';
const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';
const FETCH_USERS_FALIURE = 'FETCH_USERS_FALIURE';

function fetachUsersRequests() {
  return {
    type: FETCH_USERS_REQUESTS,
  };
}

function fetachUsersSuccess() {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: users,
  };
}

function fetachUsersFaliure() {
  return {
    type: FETCH_USERS_FALIURE,
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
      return { loading: true };
      break;
    case FETCH_USERS_SUCCESS:
      return { loading: false, error: '', data: action?.payload };
      break;
    case FETCH_USERS_REQUESTS:
      return { loading: false, error: action?.payload, data: [] };
      break;
    default:
      return state;
      break;
  }
};

const store = createStore(reducer);