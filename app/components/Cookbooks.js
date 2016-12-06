import React from 'react';
import {
  View,
  Text,
  ListView,
} from 'react-native';
import { List, Row } from './index';

const prepare = (navigate, id) => () => navigate({
  key: 'recipes',
  title: `${id}`,
  id,
})

const renderRow = (navigatePush) => (rowData) => (
  <Row
    onPress={prepare(navigatePush, rowData)}
    underlayColor="#D0D0D0"
    >
    <View><Text>{rowData}</Text></View>
  </Row>
)

const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
const data = [
  'Asian-Cookbook',
  'German-Cookbook',
  'British-Cookbook',
  'BBQ-Cookbook',
  'Love-Cookbook',
  'Rice-Cookbook',
  '1-Cookbook',
  '2-Cookbook',
  '3-Cookbook',
  '4-Cookbook',
  '5-Cookbook',
  '6-Cookbook',
  '7-Cookbook',
  '8-Cookbook',
];
export default ({ navigatePush }) => (
    <List
      data={data}
      renderRow={renderRow(navigatePush)}
    />
);
