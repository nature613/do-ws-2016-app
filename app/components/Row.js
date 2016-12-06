import React from 'react';
import {
  PixelRatio,
} from 'react-native';
import styled from 'styled-components/native';

export default styled.TouchableHighlight`
  padding: 15;
  background-color: white;
  border-bottom-width: ${1 / PixelRatio.get()};
  border-bottom-color: #CDCDCD;
`;
