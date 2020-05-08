import AsyncStorage from '@react-native-community/async-storage';
import {createLogger} from 'redux-logger';
import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {persistStore, persistReducer} from 'redux-persist';
import autoMergeLevel1 from 'redux-persist/lib/stateReconciler/autoMergeLevel1';

import rootSaga from './rootSaga';
import rootReducer from './rootReducer';

const sagaMiddleware = createSagaMiddleware();
const loggerMiddleware = createLogger();

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  stateReconciler: autoMergeLevel1,
  whitelist: ['messenger'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

function configureStore() {
  // Singleton store
  const store = createStore(
    persistedReducer,
    {},
    applyMiddleware(sagaMiddleware, loggerMiddleware),
  );
  const persistor = persistStore(store);
  sagaMiddleware.run(rootSaga);

  return {store, persistor};
}

const Store = configureStore();

export default Store;
