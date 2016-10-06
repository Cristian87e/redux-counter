import reducers from '../reducers';
import { combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import promiseMiddleware from 'redux-promise-middleware';

const store = ($ngReduxProvider) => {
  'ngInject';
  let reducer = combineReducers(reducers);
  $ngReduxProvider.createStoreWith(reducer, [thunk, promiseMiddleware()]);
};

export default store;
