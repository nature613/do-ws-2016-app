import React from 'react';
import styled from 'styled-components/native';
import {
  View,
  Dimensions,
  Animated,
} from 'react-native';
import {
  Scroll,
  Row,
} from './index';

const Button = styled.TouchableHighlight`
  flex: 1;
  border-width: 1;
  border-radius: 5;
  border-color: rgb(0, 122, 255);
  ${''/* background-color: deepskyblue ;*/}
  margin: 20;
`;

const Container = styled.View`
  flex-direction: row;
  justify-content: space-around;
`;

const Text = styled.Text`
  font-size: 20;
  margin: 10;
  text-align: center;
`;

const Step = styled.View`
  width: ${() => Dimensions.get('window').width};
`

const Task = ({task, id, active}) => (
  <Step active={active}>
    <Text>#{id+1} - {task.title} - {task.method}-{task.intensity}</Text>
    <Text>{task.duration}sec</Text>
  </Step>
)

const ControlledScroll = styled.ScrollView`
  height: 320;
  flex: 1;
`;

class Sequence extends React.Component {
  constructor(props) {
    super(props);
    this.updateTask = this.updateTask.bind(this)
  }

  updateTask(value){
    return () => {
      const { updateRoute, task, sequence} = this.props;
      const newTask = task + value;
      if((newTask>= 0) && (newTask < sequence.length)) {
        updateRoute({
          task: newTask,
        })()
      }
    };
  }

  componentWillReceiveProps(nextProps) {
    if(this.props.task !== nextProps.task) {
      this.scrollView.scrollTo({x: Dimensions.get('window').width*nextProps.task});
    }
  }

  render() {
    const {sequence, task: activeTask} = this.props;
    return (
      <View>
        <ControlledScroll
          scrollEnabled={false}
          pagingEnabled
          horizontal
          innerRef={(scrollView) => { this.scrollView = scrollView; }}
        >
          {sequence.map((task, index) => (
            <Task
              key={index}
              task={task}
              id={index}
              active={index===activeTask}
            />
          ))}
        </ControlledScroll>
        <Container>
          <Button
            underlayColor="#D0D0D0"
            onPress={this.updateTask(-1)}
          >
            <View><Text>Previous Task</Text></View>
          </Button>
          <Button
            underlayColor="#D0D0D0"
            onPress={this.updateTask(1)}
          >
            <View><Text>Next Task</Text></View>
          </Button>

        </Container>
      </View>
    )
  }
}

const renderContent = (updateRoute, task) => (recipe) => (
  <View>
    <Row
      height={150}
      title={recipe.description}
      author={recipe.author.username}
      tags={recipe.tags}
      source={recipe.thumbnail?{uri:recipe.thumbnail}:null}
    />
    <Sequence sequence={recipe.sequence} task={task} updateRoute={updateRoute} />
  </View>
)
export default ({ triggerDemo, data, updateRoute, scene }) => (
  <Scroll
    loading={data.loading}
    error={data.error}
    data={data.recipe}
    renderContent={renderContent(updateRoute, scene.route.task)}
  />
);
