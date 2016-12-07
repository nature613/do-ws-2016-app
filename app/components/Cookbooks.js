import React from 'react';
import {
  View,
  ListView,
  Image,
} from 'react-native';
import styled from 'styled-components/native';
import { List, Row } from './index';
import fire from '../lib/fire';
const img = {
  uri: fire,
}
const prepare = (navigate, id) => () => navigate({
  key: 'recipes',
  title: `${id}`,
  id,
})

const renderRow = (navigatePush) => (rowData) => (
  <Row
    height={85}
    onPress={prepare(navigatePush, rowData.id)}
    underlayColor="#D0D0D0"
    source={rowData.thumbnail}
    title={rowData.id}
    subtitle="test"
  />
)

const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
const data = [
  {
    id:'Asian-Cookbook',
    thumbnail: img,
  },
  {
    id:'German-Cookbook',
    thumbnail: img,
  },
  {
    id:'British-Cookbook',
  },
  {
    id:'BBQ-Cookbook',
  },
  {
    id:'Love-Cookbook',
  },
  {
    id:'Rice-Cookbook',
  },
  {
    id:'1-Cookbook',
  },
  {
    id:'2-Cookbook',
  },
  {
    id:'3-Cookbook',
  },
  {
    id:'4-Cookbook',
  },
  {
    id:'5-Cookbook',
  },
  {
    id:'6-Cookbook',
  },
  {
    id:'7-Cookbook',
  },
  {
    id:'8-Cookbook',
  },
];
export default ({ navigatePush }) => (
    <List
      data={data}
      renderRow={renderRow(navigatePush)}
    />
);
