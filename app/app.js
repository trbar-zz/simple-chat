// @flow

import React from 'react';
import {Dimensions, StyleSheet} from 'react-native';
import NativeTachyons from 'react-native-style-tachyons';
import {Provider} from 'react-redux';

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
    <Provider store={Store}>
      <MessengerContainer />
    </Provider>
  );
};

export default App;
