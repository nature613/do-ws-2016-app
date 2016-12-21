/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import {
  AppRegistry,
} from 'react-native';
import { ApolloProvider } from 'react-apollo';
import { store, client } from './app';
import { AppContainer } from './app/containers';

const App = () => (
  <ApolloProvider store={store} client={client}>
    <AppContainer/>
  </ApolloProvider>
);

export default App;
AppRegistry.registerComponent('bbqApp', () => App);
