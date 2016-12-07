import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ActionCreators } from '../actions';
import { Recipes } from '../components';

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(ActionCreators, dispatch);
const mapStateToProps = (state) => ({
  recipes: state.recipes,
});
export default connect(mapStateToProps, mapDispatchToProps)(Recipes);
