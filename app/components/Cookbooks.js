import React from 'react';
import {
  View,
  ListView,
  Image,
} from 'react-native';
import styled from 'styled-components/native';
import { List, Row } from './index';
const prepare = (navigate, id) => () => navigate({
  key: 'recipes',
  title: `${id}`,
  id: `#${id}`,
})

const renderRow = (navigatePush) => (rowData) => (
  <Row
    height={85}
    onPress={prepare(navigatePush, rowData.id)}
    underlayColor="#D0D0D0"
    source={rowData.thumbnail?{uri:rowData.thumbnail}:null}
    title={rowData.id}
    subtitle="test"
  />
)

const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
export default ({ navigatePush, cookbooks }) => (
    <List
      data={cookbooks}
      renderRow={renderRow(navigatePush)}
    />
);
