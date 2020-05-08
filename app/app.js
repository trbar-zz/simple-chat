// @flow
import React from 'react';
import {Dimensions, StyleSheet} from 'react-native';
import NativeTachyons from 'react-native-style-tachyons';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

import Store from './configureStore';
import MessengerContainer from './messenger/messengerContainer';

NativeTachyons.build(
  {
    rem: Dimensions.get('window').width > 340 ? 18 : 16,
    fontRem: 20,
  },
  StyleSheet,
);

const App = () => {
  return (
    <Provider store={Store.store}>
      <PersistGate loading={null} persistor={Store.persistor}>
        <MessengerContainer />
      </PersistGate>
    </Provider>
  );
};

export default App;
