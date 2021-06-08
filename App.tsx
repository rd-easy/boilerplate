/* eslint-disable react/style-prop-object */
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Home from './src/pages/Home';

const App: React.FC = () => (
  <View style={styles.container}>
    <Home />
    <StatusBar style="light" translucent />
  </View>
);

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#993399',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
