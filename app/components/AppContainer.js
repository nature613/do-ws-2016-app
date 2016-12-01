import React from 'react';
import styled from 'styled-components/native';
import {
  TouchableHighlight,
  View,
} from 'react-native';


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

const Button = styled.TouchableHighlight`
   background-color: ${props => props.warning ? 'orange' : 'limegreen'};
  padding: 5;
  border: 1 solid black;
  border-radius: 5;
  min-width: 100;
`;

export default ({ triggerDemo, demo }) => (
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
    <Button onPress={triggerDemo} warning={demo}><View><Instructions>Toggle Demo</Instructions></View></Button>
    <Instructions>
      Demo: {demo.toString()}
    </Instructions>
  </Container>
);
