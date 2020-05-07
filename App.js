/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, ScrollView, View, Text, StatusBar} from 'react-native';
import {styles as s} from 'react-native-style-tachyons';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={{backgroundColor: Colors.lighter}}>
          <Header />
          {global.HermesInternal == null ? null : (
            <View style={[s.absolute, s.right_0]}>
              <Text style={[s.tr, s.f5, s.fw6, s.p6, s.pr5]}>
                Engine: Hermes
              </Text>
            </View>
          )}
          <View style={{backgroundColor: Colors.white}}>
            <View style={[s.mt3, s.ph4]}>
              <Text style={[s.f4, s.b]}>Step One</Text>
              <Text style={[s.mt1, s.f5, s.black, s.fw4]}>
                Edit <Text style={[s.fw7]}>App.js</Text> to change this screen
                and then come back to see your edits.
              </Text>
            </View>
            <View style={[s.mt3, s.ph4]}>
              <Text style={[s.f4, s.b]}>See Your Changes</Text>
              <Text style={[s.mt1, s.f5, s.black, s.fw4]}>
                <ReloadInstructions />
              </Text>
            </View>
            <View style={[s.mt3, s.ph4]}>
              <Text style={[s.f4, s.b]}>Debug</Text>
              <Text style={[s.mt1, s.f5, s.black, s.fw4]}>
                <DebugInstructions />
              </Text>
            </View>
            <View style={[s.mt3, s.ph4]}>
              <Text style={[s.f4, s.b]}>Learn More</Text>
              <Text style={[s.mt1, s.f5, s.black, s.fw4]}>
                Read the docs to discover what to do next:
              </Text>
            </View>
            <LearnMoreLinks />
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default App;
