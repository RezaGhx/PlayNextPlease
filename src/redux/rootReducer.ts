import { combineReducers } from 'redux';
import cakeReducer from "./cake/reducer";
import sodaReducer from "./soda/reducer";

const rootReducer = combineReducers({
    cake: cakeReducer,
    soda: sodaReducer,
});

export default rootReducer;