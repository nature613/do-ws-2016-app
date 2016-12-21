import React from 'react';
import styled from 'styled-components/native';
import {
  View,
  ScrollView,
  PixelRatio,
  RefreshControl,
} from 'react-native';

import {
  Spinner,
} from './index'

const Scroll = styled(ScrollView)`
  margin-top: 64;
  background-color: white;
  overflow: visible;
`;
const ConnectionError = styled.View`
  margin-top: 84;
  flex-direction: row;
  justify-content: center;
`;
const Text = styled.Text`
  color: orange;
`;

export default ({ loading, onRefresh, error, renderContent, data }) => {
  if (!error) {
    return (
      <Scroll
        refreshControl={
          <RefreshControl
              refreshing={loading}
              onRefresh={onRefresh}
          /> }
      >
        {!loading && renderContent(data)}
      </Scroll>
    );
  }else {
    return (
      <ConnectionError>
        <Text>An error while connecting occured</Text>
      </ConnectionError>
  );
  }
};
