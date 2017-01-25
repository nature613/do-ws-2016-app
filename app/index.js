import {
  createStore,
  compose,
  applyMiddleware,
  combineReducers,
} from 'redux'
import ApolloClient, { createNetworkInterface } from 'apollo-client';

import appReducers from './reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const apolloClient = new ApolloClient({
  networkInterface: createNetworkInterface({ uri: 'https://bbq-server.dev.jonas-faber.me/graphql' }),
});

const reducer = combineReducers({
  app: appReducers,
  apollo: apolloClient.reducer(),
})

const configureStore = (initialState) => {
  const enhancer = composeEnhancers(
    applyMiddleware(
      apolloClient.middleware(),
    )
  )
  const store = createStore(reducer, initialState, enhancer);
    // if (module.hot) {
    //   module.hot.accept(() => {
    //     const nextRootReducer = require('./reducers/index').default;
    //     store.replaceReducer(nextRootReducer);
    //   });
    // }
  return store;
}
export const store = configureStore({});
export const client = apolloClient;
