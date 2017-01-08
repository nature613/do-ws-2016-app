import React from 'react';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Ionicons';
import Sound from 'react-native-sound';
import KeepAwake from 'react-native-keep-awake';

import {
  View,
  Dimensions,
  Animated,
  Alert,
  Vibration,
} from 'react-native';
import {
  Scroll,
  Row,
} from './index';

const Button = styled.TouchableHighlight`
  flex: ${({flex}) => flex};
  border-width: 1;
  border-radius: 5;
  border-color: ${({disabled, content}) => {
      if (disabled) {
        return 'lightgrey';
      }
      if (content) {
        return '#FF3B30'
      }
      return 'rgb(0, 122, 255)'
    }};
  margin: 10;
`;

const IconButton = ({onPress, disabled, icon, flex = 1}) => {
  return (
    <Button
      underlayColor="#D0D0D0"
      onPress={onPress}
      disabled={disabled}
      flex={flex}
    >
        <View><ButtonText disabled={disabled}><Icon name={icon} size={30}/></ButtonText></View>
    </Button>
  );
}
const TimerButton = ({onPress, disabled, icon, content, flex = 1}) => {
  return (
    <Button
      underlayColor="#D0D0D0"
      onPress={onPress}
      disabled={disabled}
      content={content}
      flex={flex}
    >
      <View>
        {content ? <KeepAwake/>: null}
        <ButtonText disabled={disabled} content={content}>
          {content ? content : <Icon name={icon} size={30}/> }
        </ButtonText>
      </View>
    </Button>
  );
}

const Container = styled.View`
  flex-direction: row;
  justify-content: space-around;
`;
const Info = styled.View`
  margin-left: 20;
  flex-direction: row;
`;

const Conditional = ({condition = true,children}) => condition ? <Info>{children}</Info> : null;

const Text = styled.Text`
  font-size: 20;
  margin: 10;
`;
const Center = styled(Text)`
  text-align: center;
`;
const ButtonText = styled(Center)`
  color: ${({disabled, content}) => {
    if (disabled) {
      return 'lightgrey';
    }
    if (content) {
      return '#FF3B30'
    }
    return 'rgb(0, 122, 255)'
  }};
  font-size: 25;
  font-family: Courier New;
  margin:5;
`;
const Label = styled(Text)`
  min-width: 150;
`;

const LightText = styled(Text)`
  color: #888;
`;
const StyledIcon = styled(Icon)`
  font-size: 20;
  margin: 10;
`
const Instructions = styled(LightText)`
  margin-left: 30;
  max-height: 100;
`;
const Step = styled.View`
  width: ${() => Dimensions.get('window').width};
  justify-content: center;
`

const Method = ({data}) => {
  const on = <StyledIcon name="ios-bonfire" color="#FF9500"/>;
  const off = <StyledIcon name="ios-bonfire-outline" color="#FF5E3A" />;
  switch (data) {
    case 'DIRECT':
      return <Text>{on} {on} {on}</Text>;
    case 'INDIRECT':
      return <Text>{on} {off} {on}</Text>;
    default:
      return null;
  }
}

const Intensity = ({data}) => {
  const on = <StyledIcon name="ios-flame" color="#FF9500" />;
  const off = <StyledIcon name="ios-flame-outline" color="#FF5E3A" />;

  switch (data) {
    case 'STRONG':
    return <Text>{on} {on} {on}</Text>;
    case 'MEDIUM':
    return <Text>{on} {on} {off}</Text>;
    case 'LOW':
    return <Text>{on} {off} {off}</Text>;
    default:
      return null;
  }
}
const Duration = ({data}) => {
  let duration = data;
  let unit = 'sec';
  if (duration > 60) {
    unit = 'min';
    duration /= 60;
    if (duration > 60) {
      unit = 'h';
      duration /= 60;
    }
  }
  return <LightText>{new Date(data * 1000).toISOString().substr(11, 8)}</LightText>;
}

const Task = ({task, id, active}) => (
  <Step active={active}>
    <Conditional>
      <Label>Step</Label>
      <LightText>{id+1}</LightText>
    </Conditional>
    <Instructions>{task.title}</Instructions>
    <Conditional condition={task.method}>
      <Label>Method</Label>
      <Method data={task.method} />
    </Conditional>
    <Conditional condition={task.intensity}>
      <Label>Intensity</Label>
      <Intensity data={task.intensity} />
    </Conditional>
    <Conditional condition={task.duration}>
      <Label>Duration</Label>
      <Duration data={task.duration}/>
    </Conditional>
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
    this.clearTimer = this.clearTimer.bind(this)
  }
  componentWillMount() {
    this.sound = new Sound('alarm.mp3', Sound.MAIN_BUNDLE, (e) => {
      if (e) {
        console.error(e);
      }
    });
  }


  updateTask(value){
    return () => {
      const { updateRoute, task, sequence} = this.props;
      const newTask = task + value;
      if((newTask>= 0) && (newTask < sequence.length)) {
        this.clearTimer()
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
        let interval = 1000;
        let ticks = duration;
        const durationMS = duration * interval;
        this.props.updateRoute({
          ticks,
        })()
        this.interval = setInterval(() => {
          --ticks;
          this.props.updateRoute({
            ticks,
          })()
        }, interval);
        this.timer = setTimeout(() => {
          clearInterval(this.interval);
          this.interval = null;
          this.sound.play((success) => {
            if (success) {
              this.sound.play();
            }
          });
          this.props.updateRoute({
            ticks: null,
          })()
          Vibration.vibrate([0, 500, 200, 500], true);
          Alert.alert(
            'Time is up.',
            this.props.sequence[this.props.task].title,
            [
              {text: 'Next Step', onPress: () => {
                this.updateTask(1)();
                this.sound.stop();
                Vibration.cancel();
              }},
            ]
          )
          this.timer = null;
        }, durationMS);
      }else {
        this.props.updateRoute({
          ticks: null,
        })()
        this.clearTimer();
      }
    }
  }

  clearTimer(){
    if (this.timer) {
      clearTimeout(this.timer);
      this.timer = null;
      clearInterval(this.interval);
      this.interval = null;
    }
  }

  componentWillReceiveProps(nextProps) {
    if(this.props.task !== nextProps.task) {
      this.scrollView.scrollTo({x: Dimensions.get('window').width*nextProps.task});
    }
  }

  componentWillUnmount() {
    this.clearTimer();
    if (this.sound) {
      this.sound.release();
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
          <TimerButton
            onPress={this.startTimer(sequence[activeTask].duration)}
            icon="ios-timer-outline"
            disabled={!sequence[activeTask].duration}
            content={ticks?new Date(ticks * 1000).toISOString().substr(11, 8):null}
            flex={2}
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
