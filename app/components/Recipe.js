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

export default ({ triggerDemo, demo, children, scene }) => (
  <Container>
    <Text>
      RecipeID: {scene.route.id}
    </Text>
    <Text>
      CookbookID: {scene.route.cookbookId}
    </Text>
  </Container>
);
