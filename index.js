/**
 * @format
 */

import {AppRegistry, Dimensions, StyleSheet} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import NativeTachyons from 'react-native-style-tachyons';

NativeTachyons.build(
  {
    rem: Dimensions.get('window').width > 340 ? 18 : 16,
    fontRem: 20,
  },
  StyleSheet,
);

AppRegistry.registerComponent(appName, () => App);
