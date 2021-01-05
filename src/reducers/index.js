import { combineReducers, createStore } from 'redux';
import bookReducer from './books';
import filterReducer from './filter';

const combinedReducers = combineReducers({
  bookReducer,
  filterReducer,
});

export default createStore(combinedReducers);
