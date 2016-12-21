import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ActionCreators } from '../actions';
import { Recipe } from '../components';
import { graphql, compose } from 'react-apollo';
import gql from 'graphql-tag';
import {
  Dimensions,
} from 'react-native';
import { withProps, toClass } from 'recompose';

const {height, width} = Dimensions.get('window');
const Query = gql`
  query recipe($id: String!) {
    recipe(_id: $id) {
      _id
      title
      description
      author{
        username
      }
      tags
      thumbnail(width:${Math.max(height, width)}, height:150)
      sequence {
        title
        duration
        intensity
        method
      }
    }
  }
`

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(ActionCreators, dispatch);
const mapStateToProps = (state) => ({
});
const mapPropsToOptions = ({scene}) => {
  return {
    variables: {
      id: scene.route.id,
    }
  };
}
export default compose(
  graphql(Query, {
    options: mapPropsToOptions,
  }),
  connect(mapStateToProps, mapDispatchToProps),
  withProps(({navigateUpdate}) => ({
    updateRoute: (route) => () => navigateUpdate(route)
  })),
)(Recipe);
