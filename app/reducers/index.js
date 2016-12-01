import { combineReducers } from 'redux';
import * as DemoReducer from './demo';

export default combineReducers(Object.assign(
  DemoReducer,
))
