import React from 'react';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Ionicons';
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
  border-color: ${({disabled}) => disabled?'lightgrey':'rgb(0, 122, 255)'};
  margin: 20;
`;

const IconButton = ({onPress, disabled, icon, content}) => {
  return (
    <Button
      underlayColor="#D0D0D0"
      onPress={onPress}
      disabled={disabled}
    >
        <View><Text>{content ? content : <Icon name={icon} size={30} color={disabled?'lightgrey':'rgb(0, 122, 255)'}/>}</Text></View>
    </Button>
  );
}

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
    this.startTimer = this.startTimer.bind(this)
  }

  updateTask(value){
    return () => {
      const { updateRoute, task, sequence} = this.props;
      const newTask = task + value;
      if((newTask>= 0) && (newTask < sequence.length)) {
        updateRoute({
          task: newTask,
          ticks: null,
        })()
      }
    };
  }

  startTimer(duration){
    return () => {
      if (!this.timer) {
        console.log("Timer started: " + duration);
        const durationMS = duration * 1000;
        let ticks = duration;
        this.interval = setInterval(() => {
          console.log(--ticks);
          this.props.updateRoute({
            ticks,
          })()
        }, 1000);
        this.timer = setTimeout(() => {
          console.log("Timer ended!");
          this.updateTask(1)();
          this.timer = null;
          clearInterval(this.interval);
          this.interval = null;
        }, durationMS);
      }
    }
  }

  componentWillReceiveProps(nextProps) {
    if(this.props.task !== nextProps.task) {
      this.scrollView.scrollTo({x: Dimensions.get('window').width*nextProps.task});
    }
  }

  componentWillUnmount() {
    if (this.timer) {
      clearTimeout(this.timer);
      clearInterval(this.interval);
    }
  }

  render() {
    const {sequence, task: activeTask, ticks} = this.props;
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
          <IconButton
            onPress={this.updateTask(-1)}
            disabled={activeTask-1 < 0}
            icon="ios-arrow-back-outline"
          />
          <IconButton
            onPress={this.startTimer(sequence[activeTask].duration)}
            icon="ios-timer-outline"
            disabled={!sequence[activeTask].duration}
            content={ticks}
          />
          <IconButton
            onPress={this.updateTask(1)}
            disabled={activeTask+1 > sequence.length-1}
            icon="ios-arrow-forward-outline"
          />
        </Container>
      </View>
    )
  }
}

const renderContent = (updateRoute, task, ticks) => (recipe) => (
  <View>
    <Row
      height={150}
      title={recipe.description}
      author={recipe.author.username}
      tags={recipe.tags}
      source={recipe.thumbnail?{uri:recipe.thumbnail}:null}
    />
    <Sequence sequence={recipe.sequence} task={task} ticks={ticks} updateRoute={updateRoute} />
  </View>
)
export default ({ triggerDemo, data, updateRoute, scene }) => (
  <Scroll
    loading={data.loading}
    error={data.error}
    data={data.recipe}
    renderContent={renderContent(updateRoute, scene.route.task, scene.route.ticks)}
  />
);
