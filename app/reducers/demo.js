import createReducer from '../lib/createReducer';
import * as types from '../actions/types'

export const demo = createReducer(false, {
  [types.DEMO](state, action){
    return !state;
  }
});
