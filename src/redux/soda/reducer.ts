import { BUY_SODA } from './types';

const initialState = {
  numOfSodas: 10,
};

const sodaReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_SODA:
      return { ...state, numOfSodas: state.numOfSodas - 1 };
      break;
    default:
      return state;
      break;
  }
};

export default sodaReducer;
