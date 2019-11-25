import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to Toodler</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: '#fffg',
    backgroundColor: '#252c38',
    alignItems: 'center',
    justifyContent: 'center',
  },

  text: {
    color: '#fff',
  }
});
