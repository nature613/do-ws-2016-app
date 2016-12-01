import * as types from './types';

export const navigateForward = (state) => ({
  type: types.NAVIGATION_FORWARD,
  state,
})
export const navigateBack = (state) => ({
  type: types.NAVIGATION_BACK,
})
