import React from 'react';
import {
  NavigationExperimental,
  View,
} from 'react-native';
import styled from 'styled-components/native';
import { BlurView } from 'react-native-blur';

const {
  Header: NavigationHeader,
} = NavigationExperimental;

const Spacer = styled(BlurView)`
  height: 64;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 5;

`;
const Title = (props) => (
  <NavigationHeader.Title>{props.scene.route.key}</NavigationHeader.Title>
);

const Header = (sceneProps) => (
  <View>
    <Spacer blurType="xlight" blurAmount={8}/>
    <NavigationHeader
        {...sceneProps}
        onNavigateBack={sceneProps.navigatePop}
      />
  </View>
);

export default styled(Header)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
  background-color: transparent;
`;
