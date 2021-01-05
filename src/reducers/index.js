import { combineReducers, createStore } from 'redux';
import bookReducer from './books';

const combinedReducers = combineReducers({
  bookReducer,
});

const store = createStore(combinedReducers);

export default store;
