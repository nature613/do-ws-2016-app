import React from 'react';
import {
  NavigationExperimental,
  Text,
  View,
} from 'react-native';
import styled from 'styled-components/native';

import {
  DemoView,
  Cookbooks,
  Recipes,
  Recipe,
  Header,
} from '../containers'

const {
  CardStack,
} = NavigationExperimental;


const Container = styled.View`
  flex: 1;
`;

const NavigationCardStack = styled(CardStack)`
  flex: 20;
`;

const getScene = (key) => {
  switch (key) {
    case 'cookbooks':
      return Cookbooks;
    case 'recipes':
      return Recipes;
    case 'recipe':
      return Recipe;
    default:
      return DemoView;
  }
}
const Spacer = styled.View`
  height: 32;
  background-color: black;
`;
const renderScene = (sceneProps) => {
  const Scene = getScene(sceneProps.scene.route.key);
  return <View><Spacer/><Scene {...sceneProps} /></View>
}

const renderHeader = (props) => (
  <Header {...props}/>
)

export default ({navigation, navigatePop}) => (
  <Container>
    <NavigationCardStack
      onNavigateBack={navigatePop}
      navigationState={navigation}
      renderScene={renderScene}
      renderHeader={renderHeader}
    />
  </Container>
);
