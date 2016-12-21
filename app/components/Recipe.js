import React from 'react';
import styled from 'styled-components/native';
import {
  View,
  Dimensions,
} from 'react-native';
import {
  Scroll,
  Row,
} from './index';

const {height, width} = Dimensions.get('window');

const Container = styled.View`
`;

const Text = styled.Text`
  font-size: 20;
  margin: 10;
`;

const Sequence = styled.ScrollView``;

const Step = styled.View`
  height: 200;
  width: ${({width}) => width};
`

const Task = ({task, id, width}) => (
  <Step width={width}>
    <Text>#{id} - {task.title}</Text>
    <Text>{task.duration}sec</Text>
    <Text>{task.method}-{task.intensity}</Text>
  </Step>
)

const renderContent = (recipe) => (
  <Container>
    <Row
      height={150}
      title={recipe.description}
      author={recipe.author.username}
      tags={recipe.tags}
      source={recipe.thumbnail?{uri:recipe.thumbnail}:null}
    />
    <Sequence horizontal pagingEnabled>
      {recipe.sequence.map((task, index) => (
        <Task
          key={index}
          task={task}
          id={index}
          width={Dimensions.get('window').width}
        />
      ))}
    </Sequence>
  </Container>
)
export default ({ triggerDemo, data }) => (
  // <Container>
  //   {data.loading ?
  //     <Spinner/>:
  //     <View>
  //       <Text>Author: {data.recipe.author.username}</Text>
  //       <Text>Tags: {data.recipe.tags.toString()}</Text>
  //     </View>
  //   }
  // </Container>
  <Scroll
    loading={data.loading}
    error={data.error}
    data={data.recipe}
    renderContent={renderContent}
  />
);
