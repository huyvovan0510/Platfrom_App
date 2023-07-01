import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import RootNavigation from './src/navigation';

const App = () => {
  return <RootNavigation />;
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
