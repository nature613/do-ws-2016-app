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

const Text = styled.Text`
  font-size: 20;
  text-align: center;
  margin: 10;
`;

const Button = styled.TouchableHighlight`
  background-color: ${props => props.warning ? 'orange' : 'limegreen'};
  padding: 5;
  border: 1 solid black;
  border-radius: 5;
  min-width: 100;
`;

export default ({ triggerDemo, demo, children, scene }) => (
  <Container>
    <Text>
      Recipe {scene.route.id}
    </Text>
    <Text>
      Category {scene.route.category}
    </Text>
  </Container>
);
