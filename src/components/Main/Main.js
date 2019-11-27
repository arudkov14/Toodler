import React from 'react';
import { StyleSheet, Text, View, Button, Alert, Vibration } from 'react-native';

const Main = ({ navigation: { navigate } }) => {
	return(
		<View style={styles.container}>
			<View style={styles.headerContainer}>
				<Text style={styles.text}>Welcome to Toodler</Text>
			</View>

			<View style={styles.buttonContainer}>
				<Button color='#515b6b' title='View Boards' onPress={() => {
					navigate('Boards', { navigation: navigate });
					//Alert.alert('Blabla');
					//Vibration.vibrate(50);
				}}/>

				<Button color='#515b6b' title='Create Board' onPress={() => {
					navigate('CreateBoard', { navigation: navigate });
				}}/>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
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
    marginTop: -500,
  }
});

export default Main;
