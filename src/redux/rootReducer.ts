import { combineReducers } from 'redux';
import cakeReducer from "./cake/reducer";
import sodaReducer from "./soda/reducer";
import userReducer from "./user/reducer";

const rootReducer = combineReducers({
    cake: cakeReducer,
    soda: sodaReducer,
    user: userReducer,
});

export default rootReducer;