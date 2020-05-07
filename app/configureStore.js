import {createLogger} from 'redux-logger';
import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware();

let middleware = [sagaMiddleware];
if (__DEV__) {
  const loggerMiddleware = createLogger();
  middleware = [...middleware, loggerMiddleware];
}

function configureStore() {
  // Singleton store
  const store = createStore(
    require('./rootReducer').default,
    {},
    applyMiddleware(...middleware),
  );

  return store;
}

const Store = configureStore();

export default Store;
