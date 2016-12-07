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
  id: `#${id}`,
  cookbookId,
})

const renderRow = (navigatePush, cookbookId) => (rowData) => (
  <Row
    onPress={prepare(navigatePush, rowData.id, cookbookId)}
    underlayColor="#D0D0D0"
    height={85}
    title={rowData.id}
    source={rowData.thumbnail?{uri:rowData.thumbnail}:null}
    subtitle="test"
  />
)

const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
export default ({ navigatePush, scene, recipes }) => (
    <List
      data={recipes}
      renderRow={renderRow(navigatePush, scene.route.id)}
    />
);
