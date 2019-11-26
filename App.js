import React from 'react';
import { StyleSheet, Text, View, Button, Alert, Vibration } from 'react-native';
import Boards from './src/components/Boards/Boards';
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
    //backgroundColor: '#fffg',
    backgroundColor: '#252c38',
    justifyContent: 'center',
  },

  headerContainer: {
    flex: 0.5,
    alignItems: 'center',
    marginTop: -100,
  },

  text: {
    color: '#fff',
    fontSize: 25,
  },

  buttonContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 15,
    marginTop: -400,
  }
});
