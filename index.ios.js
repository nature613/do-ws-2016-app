/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import {
  AppRegistry,
} from 'react-native';
import { Provider } from 'react-redux';
import { store } from './app';
import AppContainer from './app/containers/AppContainer';

const App = () => (
  <Provider store={store}>
    <AppContainer/>
  </Provider>
);

export default App;
AppRegistry.registerComponent('bbqApp', () => App);
