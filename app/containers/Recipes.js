import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ActionCreators } from '../actions';
import { Recipes } from '../components';
import { graphql, compose } from 'react-apollo';
import gql from 'graphql-tag';
import {
  Dimensions,
} from 'react-native';
import { withProps } from 'recompose';

const {height, width} = Dimensions.get('window');
const Query = gql`
  query cookbook($id: String!) {
    cookbook(_id: $id) {
      recipes {
        _id
        title
        author{
          username
        }
        tags
        thumbnail(width:${Math.max(height, width)}, height:85)
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
  withProps(({navigatePush}) => ({
    navigate: ({_id, title}) => () => navigatePush({
      key: 'recipe',
      title: title,
      id: _id,
      task: 0,
    })
  }))
)(Recipes);
