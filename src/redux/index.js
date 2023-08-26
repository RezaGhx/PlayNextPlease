// import { createStore, combineReducers, applyMiddleware } from 'redux';
// import createLogger from 'redux-logger';

const redux = require('redux');
const reduxLogger = require('redux-logger');
const createStore = redux.createStore;
const combineReducers = redux.combineReducers;
const applyMiddleware = redux.applyMiddleware;
const createLogger = reduxLogger.createLogger();

// actions
const BUY_CAKE = 'BUY_CAKE';
const BUY_SODA = 'BUY_SODA';

function buyCake() {
  return {
    type: BUY_CAKE,
  };
}

function buySoda() {
  return {
    type: BUY_SODA,
  };
}

// reducers
const cakeInitialize = {
  cakes: 10,
};

const sodaInitialize = {
  sodas: 20,
};

const cakeReducer = (state = cakeInitialize, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return { ...state, cakes: state.cakes - 1 };
      break;
    default:
      return state;
      break;
  }
};

const sodaReducer = (state = sodaInitialize, action) => {
  switch (action.type) {
    case BUY_SODA:
      return { ...state, sodas: state.sodas + 1 };
      break;
    default:
      return state;
      break;
  }
};

const reducer = combineReducers({
  cake: cakeReducer,
  soda: sodaReducer,
});

const store = createStore(reducer, applyMiddleware(createLogger));
console.log('initial state:', store.getState());

// const unsubscribe = store.subscribe(() => console.log('updated state:', store.getState()));

store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buySoda());
store.dispatch(buySoda());
store.dispatch(buySoda());
