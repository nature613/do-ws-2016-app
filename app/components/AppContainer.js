import React from 'react';
import {
  Animated,
  NavigationExperimental,
} from 'react-native';
import styled from 'styled-components/native';

import DemoView from '../containers/DemoView';
import Cookbooks from '../containers/Cookbooks';
import Recipes from '../containers/Recipes';

const {
  Transitioner,
  Card,
  CardStack,
} = NavigationExperimental;
const {
  PagerStyleInterpolator,
} = Card;

const Container = styled.View`
  flex: 1;
`;

const getScene = (key) => {
  switch (key) {
    case 'Cookbooks':
      return Cookbooks;
    case 'Recipes':
      return Recipes;
    default:
      return DemoView;
  }
}

const SceneContainer = (props) => {
  const Scene = getScene(props.scene.route.key);
  const style = [
    {
      flex: 1,
      position: 'absolute',
      bottom: 0,
      top: 0,
      left: 0,
      right: 0,
    },
    PagerStyleInterpolator.forHorizontal(props),
  ];
  return (
    <Animated.View style={style}>
      <Scene {...props} style={style} />
    </Animated.View>
  )
}

const renderScene = (sceneProps) => {
  return <SceneContainer {...sceneProps} key={sceneProps.scene.key} />
}

const render = (transitionProps) => {
  const scenes = transitionProps.scenes.map( (scene) => {
    return renderScene({
      ...transitionProps,
      scene,
    })
  })
  return <Container>{scenes}</Container>
}

export default ({navigation}) => (
  <Transitioner
    navigationState={navigation}
    render={render}
  />
);
