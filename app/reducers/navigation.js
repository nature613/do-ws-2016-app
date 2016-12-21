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
    {
      key: 'cookbooks',
      title: 'Cookbooks',
    },
  ]
}, {
  [types.NAVIGATION_PUSH](state, action){
    const { routes, index } =  state;
    if (routes[index].key !== action.state.key) {
      return Object.assign({}, state, StateUtils.push(state, action.state));
    }
    return state;
  },
  [types.NAVIGATION_POP](state, action){
    return StateUtils.pop(state);
  },
});
