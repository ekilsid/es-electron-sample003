import { combineReducers, createStore } from 'redux';

import headerReducer from '../modules/Header';

const rootReducer = combineReducers({
  header: headerReducer
});

const store = createStore(rootReducer);

export default store;
