import React from 'react';
import {
  PixelRatio,
  View
} from 'react-native';
import styled from 'styled-components/native';

const Row = styled.TouchableHighlight`
  background-color: white;
  border-bottom-width: ${1 / PixelRatio.get()};
  border-bottom-color: #CDCDCD;
`;

const Overlay = styled.View`
  z-index:2;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: black;
  opacity: 0.5;
`;

const BackgroundImage = styled.Image`
  z-index: 1;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;
const Container = styled.View`
  z-index: 3;
  flex: 1;
  height: ${({height}) => height?height:70};
  background-color: transparent;
  padding: 10;
`;
const white = (alpha = 1) => `rgba(255,255,255,${alpha})`

const Title = styled.Text`
  z-index: 10;
  color: ${({dark}) => dark?white(0.85):'black'};
  font-size: 20;
`;
const Subtitle = styled.Text`
  color: ${({dark}) => dark?white(0.6):'black'};
  align-self: flex-end;
  font-size: 15;
`;

export default (props) =>(
  <Row {...props}>
    <View>
      <Container>
        <Title dark={!!props.source}>{props.title}</Title>
        <Subtitle dark={!!props.source}>{props.subtitle}</Subtitle>
      </Container>
      <Overlay/>
      <BackgroundImage source={props.source} height={props.height}/>
    </View>
  </Row>
)
