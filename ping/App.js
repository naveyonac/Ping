

import React, {Fragment} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import Signup from './components/signup/signup'

const App = () => {
  return (
    <View style={{flex: 1,
      top: 150,
      alignItems: "center"}}>
      <Text>Hello, World!</Text>
      <Signup></Signup>
    </View>
  );
};


export default App;
