import createReducer from '../lib/createReducer';
import asian from '../lib/img/asian';
import burger from '../lib/img/burger';
import fire from '../lib/img/fire';
import fish from '../lib/img/fish';
import gulasch from '../lib/img/gulasch';
import italiano from '../lib/img/italiano';
import sandwich from '../lib/img/sandwich';
import squirt from '../lib/img/squirt';
import wurst from '../lib/img/wurst';
import * as types from '../actions/types'

const cookbookData = [
  {
    id:'Asian-Cookbook',
    thumbnail: asian,
  },
  {
    id:'German-Cookbook',
    thumbnail: wurst,
  },
  {
    id:'British-Cookbook',
    thumbnail: sandwich,
  },
  {
    id:'BBQ-Cookbook',
    thumbnail: fire,
  },
  {
    id:'Love-Cookbook',
    thumbnail: fish,
  },
  {
    id:'Rice-Cookbook',
    thumbnail: squirt,
  },
  {
    id:'1-Cookbook',
    thumbnail: gulasch,
  },
  {
    id:'2-Cookbook',
    thumbnail: burger,
  },
  {
    id:'3-Cookbook',
    thumbnail: italiano,
  },
  {
    id:'4-Cookbook',
  },
  {
    id:'5-Cookbook',
  },
  {
    id:'6-Cookbook',
  },
  {
    id:'7-Cookbook',
  },
  {
    id:'8-Cookbook',
  },
];
export const cookbooks = createReducer(cookbookData,{

})
const recipesData = [
  {
    id:'Asian-Recipe',
    thumbnail: asian,
  },
  {
    id:'German-Recipe',
    thumbnail: wurst,
  },
  {
    id:'British-Recipe',
    thumbnail: sandwich,
  },
  {
    id:'BBQ-Recipe',
    thumbnail: fire,
  },
  {
    id:'Love-Recipe',
    thumbnail: fish,
  },
  {
    id:'Rice-Recipe',
    thumbnail: squirt,
  },
  {
    id:'1-Recipe',
    thumbnail: gulasch,
  },
  {
    id:'2-Recipe',
    thumbnail: burger,
  },
  {
    id:'3-Recipe',
    thumbnail: italiano,
  },
  {
    id:'4-Recipe',
  },
  {
    id:'5-Recipe',
  },
  {
    id:'6-Recipe',
  },
  {
    id:'7-Recipe',
  },
  {
    id:'8-Recipe',
  },
];
export const recipes = createReducer(recipesData,{

})
export const demo = createReducer(false, {
  [types.DEMO](state, action){
    return !state;
  },
});
