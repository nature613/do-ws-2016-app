import {
  NavigationExperimental
} from 'react-native';
import createReducer from '../lib/createReducer';
import * as types from '../actions/types'

const {
  StateUtils,
} = NavigationExperimental;

export const navigation = createReducer({
  index: 0,
  routes: [
    { key: 'Cookbooks' },
    { key: 'Recipes' },
  ]
}, {
  [types.NAVIGATION_FORWARD](state, action){
    return StateUtils.forward(state);
  },
  [types.NAVIGATION_BACK](state, action){
    return StateUtils.back(state);
  },
});
export const navigationParams = createReducer({},{
    [types.NAVIGATION_FORWARD](state, action){
      return action.state
    },
    [types.NAVIGATION_BACK](state, action){
      return {};
    },
})
