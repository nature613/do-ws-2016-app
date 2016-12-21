import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ActionCreators } from '../actions';
import { Cookbooks } from '../components';
import { graphql, compose } from 'react-apollo';
import gql from 'graphql-tag';
import {
  Dimensions,
} from 'react-native';

const {height, width} = Dimensions.get('window');
const Query = gql`
  query cookbooks_list {
    cookbooks {
    	_id
      title
      author{
        username
      }
      tags
      thumbnail(width:${Math.max(height, width)}, height:85)
    }
  }
`

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(ActionCreators, dispatch);

const mapStateToProps = (state) => ({
});

export default compose(
  graphql(Query),
  connect(mapStateToProps, mapDispatchToProps),
)(Cookbooks);
