import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ActionCreators } from '../actions';
import { Recipe } from '../components';

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(ActionCreators, dispatch);
const mapStateToProps = (state) => ({
});
export default connect(mapStateToProps, mapDispatchToProps)(Recipe);
