import React from 'react';
import {
  View,
  Text,
  ListView,
} from 'react-native';
import { List, Row } from './index';

const renderRow = (navigate) => (recipe) => (
  <Row
    onPress={navigate(recipe)}
    underlayColor="#D0D0D0"
    height={85}
    title={recipe.title}
    source={recipe.thumbnail?{uri:recipe.thumbnail}:null}
    author={recipe.author.username}
    tags={recipe.tags}
  />
)

const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
export default ({ navigate, data }) => (
    <List
      data={!data.loading && data.cookbook.recipes}
      renderRow={renderRow(navigate)}
      loading={data.loading}
      error={data.error}
      onRefresh={data.refetch}
    />
);
