import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ActionCreators } from '../actions';
import { Cookbooks } from '../components';

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(ActionCreators, dispatch);
const mapStateToProps = (state) => ({
  cookbooks: state.cookbooks,
});
export default connect(mapStateToProps, mapDispatchToProps)(Cookbooks);
