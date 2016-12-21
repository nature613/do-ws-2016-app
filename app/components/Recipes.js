import React from 'react';
import {
  View,
  Text,
  ListView,
} from 'react-native';
import { List, Row } from './index';

const prepare = (navigate, {_id, title}) => () => navigate({
  key: 'recipe',
  title: title,
  id: _id,
})

const renderRow = (navigatePush, cookbookId) => (recipe) => (
  <Row
    onPress={prepare(navigatePush, recipe, cookbookId)}
    underlayColor="#D0D0D0"
    height={85}
    title={recipe.title}
    source={recipe.thumbnail?{uri:recipe.thumbnail}:null}
    author={recipe.author.username}
    tags={recipe.tags}
  />
)

const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
export default ({ navigatePush, data }) => (
    <List
      data={!data.loading && data.cookbook.recipes}
      renderRow={renderRow(navigatePush)}
      loading={data.loading}
      error={data.error}
      onRefresh={data.refetch}
    />
);
