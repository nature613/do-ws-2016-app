import React from 'react';
import {
  View,
  ListView,
  Image,
} from 'react-native';
import styled from 'styled-components/native';
import { List, Row } from './index';

const renderRow = (navigate) => (cookbook) => (
  <Row
    height={85}
    onPress={navigate(cookbook)}
    underlayColor="#D0D0D0"
    source={cookbook.thumbnail?{uri:cookbook.thumbnail}:null}
    title={cookbook.title}
    author={cookbook.author.username}
    tags={cookbook.tags}
  />
)

const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
export default ({ navigate, data }) => (
  <List
      data={data.cookbooks}
      renderRow={renderRow(navigate)}
      loading={data.loading}
      error={data.error}
      onRefresh={data.refetch}
    />
);
