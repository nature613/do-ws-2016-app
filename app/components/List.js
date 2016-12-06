import React from 'react';
import styled from 'styled-components/native';
import {
  View,
  ListView,
  PixelRatio,
} from 'react-native';

const List = styled(ListView)`
  background-color: white;
`;
const SpacerTop = styled.View`
  height: 64;
  flex: 1;
  border-bottom-width: ${1 / PixelRatio.get()};
  border-bottom-color: #CDCDCD;
`;

const renderHeader = () => <SpacerTop/>

const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

export default ({ data, renderRow }) => (
    <List
      dataSource={ds.cloneWithRows(data)}
      renderRow={renderRow}
      renderHeader={renderHeader}
    />
);
