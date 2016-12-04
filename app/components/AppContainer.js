import React from 'react';
import {
  NavigationExperimental,
  Text,
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

`;

const getScene = (key) => {
  switch (key) {
    case 'Cookbooks':
      return Cookbooks;
    case 'Recipes':
      return Recipes;
    case 'Recipe':
      return Recipe;
    default:
      return DemoView;
  }
}

const renderScene = (sceneProps) => {
  const Scene = getScene(sceneProps.scene.route.key);
  return <Scene {...sceneProps} />
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
