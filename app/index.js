import {
  createStore,
  compose,
  applyMiddleware,
} from 'redux'
import createLogger from 'redux-logger';
import reducer from './reducers';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const loggerMiddelware = createLogger({predicate: (getState, action) => __DEV__})
const configureStore = (initialState) => {
  const enhancer = composeEnhancers(
    applyMiddleware(
      loggerMiddelware,
    )
  )
  return createStore(reducer, initialState, enhancer);
}
export const store = configureStore({});
