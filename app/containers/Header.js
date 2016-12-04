import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ActionCreators } from '../actions';
import { Header } from '../components';

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(ActionCreators, dispatch);
const mapStateToProps = (state) => ({
});
export default connect(mapStateToProps, mapDispatchToProps)(Header);
