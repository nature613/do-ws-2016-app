import React from 'react';
import {
  View,
  Text,
  ListView,
} from 'react-native';
import { List, Row } from './index';

const prepare = (navigate, id, cookbookId) => () => navigate({
  key: 'recipe',
  title: `${id}`,
  id,
  cookbookId,
})

const renderRow = (navigatePush, cookbookId) => (rowData) => (
  <Row
    onPress={prepare(navigatePush, rowData, cookbookId)}
    underlayColor="#D0D0D0"
    >
    <View><Text>{rowData}</Text></View>
  </Row>
)

const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
const data = [
  '1-Recipe',
  '2-Recipe',
  '3-Recipe',
  '4-Recipe',
  '5-Recipe',
  '6-Recipe',
  '7-Recipe',
  '8-Recipe',
  '9-Recipe',
  '10-Recipe',
  '11-Recipe',
  '12-Recipe',
  '13-Recipe',
  '14-Recipe',
];
export default ({ navigatePush, scene }) => (
    <List
      data={data}
      renderRow={renderRow(navigatePush, scene.route.id)}
    />
);
