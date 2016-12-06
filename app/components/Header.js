import React from 'react';
import {
  NavigationExperimental,
  View,
} from 'react-native';
import styled from 'styled-components/native';

const {
  Header: NavigationHeader,
} = NavigationExperimental;

const Title = (props) => (
  <NavigationHeader.Title>{props.scene.route.key}</NavigationHeader.Title>
);

const Header = (sceneProps) => (
  <NavigationHeader
      {...sceneProps}
      onNavigateBack={sceneProps.navigatePop}
    />
);

export default styled(Header)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
  background-color: rgba(250, 250, 250, 0.9)
`;
