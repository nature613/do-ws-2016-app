import React from 'react';
import styled from 'styled-components/native';
import {
  View,
  ListView,
  PixelRatio,
  RefreshControl,
} from 'react-native';

import {
  Spinner,
} from './index'

const List = styled(ListView)`
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

const renderLoading = () => null

const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

export default ({ data, renderRow, loading, onRefresh, error }) => {
  if (!error) {
    return (
      <List
        removeClippedSubviews={false}
        dataSource={data ? ds.cloneWithRows(data): ds}
        renderRow={data ? renderRow : renderLoading}
        refreshControl={
          <RefreshControl
              refreshing={loading}
              onRefresh={onRefresh}
          /> }
      />
    );
  }else {
    return (
      <ConnectionError>
        <Text>An error while connecting occured</Text>
      </ConnectionError>
  );
  }
};
