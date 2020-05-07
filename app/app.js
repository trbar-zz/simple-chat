// @flow

import React from 'react';
import {Dimensions, StyleSheet} from 'react-native';
import MessengerContainer from './messenger/messengerContainer';
import NativeTachyons from 'react-native-style-tachyons';

NativeTachyons.build(
  {
    rem: Dimensions.get('window').width > 340 ? 18 : 16,
    fontRem: 20,
  },
  StyleSheet,
);

const App = () => {
  return <MessengerContainer />;
};

export default App;
