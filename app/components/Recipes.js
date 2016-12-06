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

const prepare = (navigate, id, category) => () => navigate({
  key: 'recipe',
  title: `Recipes - ${id}`,
  id,
  category,
})
export default ({ triggerDemo, navigatePush, demo, children, scene }) => (
  <Container>
    <Text>
      Recipes {scene.route.id}
    </Text>
    <Button onPress={prepare(navigatePush, "#1", scene.route.id)}>
      <View><Text>Show Recipe #1</Text></View>
    </Button>
    <Button onPress={prepare(navigatePush, "#2", scene.route.id)}>
      <View><Text>Show Recipe #2</Text></View>
    </Button>

  </Container>
);
