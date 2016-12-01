import { combineReducers } from 'redux';
import * as DemoReducer from './demo';
import * as NavigationReducer from './navigation';

export default combineReducers(Object.assign(
  DemoReducer,
  NavigationReducer,
))
