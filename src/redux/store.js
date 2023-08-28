import { createStore } from 'redux';
import reducer from './cake/reducer';

const store = createStore(reducer);
export default store;