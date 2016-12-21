import React from 'react';
import {
  PixelRatio,
  View
} from 'react-native';
import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';
const Row = styled.TouchableHighlight`
  background-color: white;
  border-bottom-width: ${1 / PixelRatio.get()};
  border-bottom-color: #CDCDCD;
`;

const Overlay = styled(LinearGradient)`
  z-index:2;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: black;
  opacity: .4;
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

const tagToString = (prev, current) => (`${prev} #${current}`);

export default (props) =>(
  <Row {...props}>
    <View>
      <Container height={props.height}>
        <Title dark={!!props.source}>{props.title}</Title>
        <Subtitle dark={!!props.source}>
          {props.tags ? props.tags.reduce(tagToString, '') : ''}
        </Subtitle>
        <Subtitle dark={!!props.source}>
          {props.author ? `by ${props.author}`: ''}
        </Subtitle>
        <Subtitle dark={!!props.source}>
          {props.subtitle}
        </Subtitle>
      </Container>
      {props.source&&<Overlay colors={['rgba(255,255,255,0)', 'rgba(0,0,0,1)']}  locations={[-1.3,1]}/>}
      <BackgroundImage source={props.source}/>
    </View>
  </Row>
)
