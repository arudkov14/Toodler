import React from 'react';
import { StyleSheet, Text, View, Button, Alert, Vibration } from 'react-native';
import Boards from './src/components/Boards/Boards';
import Data from './src/resources/data.json';

export default function App() {
  var data = { Data };
  console.log(data);
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.text}>Welcome to Toodler</Text>
      </View>

      <View style={styles.buttonContainer}>
        <Button color='#515b6b' title='View Boards' onPress={() => {
          Alert.alert('Blabla');
          Vibration.vibrate(50);

        }}/>

        <Button color='#515b6b' title='Create Board' onPress={() => {
          Alert.alert('Blabla');
          Vibration.vibrate(50);
        }}/>
      </View>
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
