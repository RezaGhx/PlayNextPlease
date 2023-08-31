import { BUY_CAKE, BUY_CAKE_BY_COUNT } from './types';

const initialState = {
  numOfCakes: 10,
};

const cakeReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return { ...state, numOfCakes: state.numOfCakes - 1 };
      break;
    case BUY_CAKE_BY_COUNT:
      return { ...state, numOfCakes: state.numOfCakes - action.payload };
      break;
    default:
      return state;
      break;
  }
};

export default cakeReducer;
