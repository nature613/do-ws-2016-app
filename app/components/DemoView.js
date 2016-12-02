import React from 'react';
import styled from 'styled-components/native';
import {
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

const prepare = (id, navigateForward) => () => navigateForward({id})

export default ({ triggerDemo, navigateForward, navigateBack, demo, children }) => (
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
    <Button onPress={prepare("test", navigateForward)}><View><Instructions>Navigate Forward</Instructions></View></Button>
    <Button onPress={navigateBack}><View><Instructions>Navigate Back</Instructions></View></Button>
    <Instructions>
      Demo: {demo.toString()}
    </Instructions>
    {children}
  </Container>
);
