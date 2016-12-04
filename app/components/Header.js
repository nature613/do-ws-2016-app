import React from 'react';
import {
  NavigationExperimental,
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
      renderTitleComponent={Title}
      onNavigateBack={sceneProps.navigatePop}
    />
);

export default styled(Header)`
  
`;
