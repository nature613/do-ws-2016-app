import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ActionCreators } from '../actions';
import DemoView from '../components/DemoView';

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(ActionCreators, dispatch);
const mapStateToProps = (state) => ({
  demo: state.demo,
});
export default connect(mapStateToProps, mapDispatchToProps)(DemoView);
