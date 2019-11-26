import React from 'react';
import { StyleSheet, Text, View, Button, Alert, Vibration } from 'react-native';
import AppContainer from './src/routes';

export default function App() {
  return (
    <View style={styles.container}>
      <AppContainer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#252c38',
    justifyContent: 'center',
  },
});
