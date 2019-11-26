import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Data from '../../resources/data.json';

class Boards extends React.Component {
	//var data = JSON.parse(JSON.stringify(Data));
  //console.log(data.boards);
  /*for(var i = 0; i < data.boards.length; i++) {
    console.log(data.boards[i].name);
  }*/

	//This goes in render() eventually
	//<Text> { data.boards[0].name } </Text>
	//<Image style={{width: 100, height: 100}} source={data.boards[0].thumbnailPhoto} />

	render() {
		return(
			<View style={styles.container}>
				<View style={styles.boardContainer}>

				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
    flex: 1,
    backgroundColor: '#252c38',
    justifyContent: 'center',
  },

	boardContainer: {
		flex: 0.5,
		marginTop: -100,
		alignSelf: 'center',
		borderRadius: 6,
		borderWidth: 0.5,
		borderColor: 'white',
		width: 250,
		height: 100,
	},

	text: {
		color: '#b4c0d4',
	}
});

export default Boards;
