import { createStore } from 'redux';
import { combineReducers } from 'redux';

import lines from './lines/lines';

const rootReducer = combineReducers({
  lines
});

const store = createStore(rootReducer);

export default store;