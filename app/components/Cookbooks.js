import React from 'react';
import {
  View,
  ListView,
  Image,
} from 'react-native';
import styled from 'styled-components/native';
import { List, Row } from './index';

const prepare = (navigate, {_id, title}) => () => navigate({
  key: 'recipes',
  title: title,
  id: _id,
})

const renderRow = (navigatePush) => (cookbook) => (
  <Row
    height={85}
    onPress={prepare(navigatePush, cookbook)}
    underlayColor="#D0D0D0"
    source={cookbook.thumbnail?{uri:cookbook.thumbnail}:null}
    title={cookbook.title}
    author={cookbook.author.username}
    tags={cookbook.tags}
  />
)

const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
export default ({ navigatePush, data }) => (
  <List
      data={data.cookbooks}
      renderRow={renderRow(navigatePush)}
      loading={data.loading}
      error={data.error}
      onRefresh={data.refetch}
    />
);
