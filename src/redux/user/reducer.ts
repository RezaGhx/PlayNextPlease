import { FETCH_USERS_REQUESTS, FETCH_USERS_SUCCESS, FETCH_USERS_FAILURE } from './types';

const initialState = {
  loading: false,
  users: [],
  error: '',
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_REQUESTS:
      return { ...state, loading: true };
      break;
    case FETCH_USERS_SUCCESS:
      return { ...state, loading: false, error: '', users: action?.payload };
      break;
    case FETCH_USERS_REQUESTS:
      return { ...state, loading: false, error: action?.payload, users: [] };
      break;
    default:
      return state;
      break;
  }
};

export default userReducer;
