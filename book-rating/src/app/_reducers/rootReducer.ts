// böse!!! import { combineReducers } from 'redux';
import { combineReducers } from 'redux-seamless-immutable';
import { counterReducer } from './counter.reducers';


export const rootReducer = combineReducers({
  counterState: counterReducer
  // TODO: router: routerReducer
});
