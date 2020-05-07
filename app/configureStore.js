import {createLogger} from 'redux-logger';
import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootSaga from './rootSaga';

const sagaMiddleware = createSagaMiddleware();
const loggerMiddleware = createLogger();

function configureStore() {
  // Singleton store
  const store = createStore(
    require('./rootReducer').default,
    {},
    applyMiddleware(sagaMiddleware, loggerMiddleware),
  );
  sagaMiddleware.run(rootSaga);

  return store;
}

const Store = configureStore();

export default Store;
