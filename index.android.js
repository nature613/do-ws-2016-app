/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';
import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #F5FCFF;
`;

const Welcome = styled.Text`
  font-size: 20;
  text-align: center;
  margin: 10;
`;

const Instructions = styled.Text`
  text-align: center;
  color: #333333;
  margin-bottom: 5;
`;

const bbqApp = () => (
  <Container>
    <Welcome>
      Welcome to React Native!
    </Welcome>
    <Instructions>
      To get started, edit index.ios.js
    </Instructions>
    <Instructions>
      Press Cmd+R to reload,{'\n'}
      Cmd+D or shake for dev menu
    </Instructions>
  </Container>
);

export default bbqApp;
AppRegistry.registerComponent('bbqApp', () => bbqApp);
