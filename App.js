import React from 'react';
import { StyleSheet, Text, View, Button, Alert, Vibration } from 'react-native';
import Data from './src/resources/data.json';
import AppContainer from './src/routes';


export default function App() {
  var data = JSON.parse(JSON.stringify(Data));
  //console.log(data.boards);
  for(var i = 0; i < data.boards.length; i++) {
    console.log(data.boards[i].name);
  }

  return (
    <View style={styles.container}>
      <AppContainer />
    </View>
  );
  //<Boards />
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#252c38',
    justifyContent: 'center',
  },
});
