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
const Spacer = styled.View`
  height: 1;
  background-color: black;
`;
const Text = styled.Text`
  font-size: 20;
  text-align: center;
  margin: 10;
`;

const Row = styled.TouchableHighlight`
  padding: 15;
  background-color: white;
  border-bottom-width: ${1 / PixelRatio.get()};
  border-bottom-color: #CDCDCD;
`;
const prepare = (navigate, id) => () => navigate({
  key: 'recipes',
  title: `Recipes - ${id}`,
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
const renderHeader = () => <SpacerTop/>
const renderSeperator = (sectionID, rowID) =>
  <Spacer key={`${sectionID}-${rowID}`}/>

const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
const data = {
  dataSource: ds.cloneWithRows([
    'John', 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin', 'John', 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin'
  ])
};
export default ({ triggerDemo, navigatePush, demo, children }) => (
    <List
      dataSource={data.dataSource}
      renderRow={renderRow(navigatePush)}
      renderHeader={renderHeader}
      renderSeperator={renderSeperator}
    />
);
