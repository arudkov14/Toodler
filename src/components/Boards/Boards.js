import React from 'react';
import SwipeableViews from 'react-swipeable-views-native';
import { StyleSheet, Text, View, Image, Button, TouchableHighlight } from 'react-native';
import BoardView from '../BoardView/BoardView';
import Data from '../../resources/data.json';
import styles from './styles.js';

const Boards = ( { navigation: navigate } ) => {
	//<Button title='X' onPress={ () => { this.deleteBoard() }} />
	//const { currentBoardId } = this.state;

	return(
		<View style={styles.container}>
			<TouchableHighlight style={ styles.createBoard } onPress={ () => {
				navigate.navigate('CreateBoard', { navigation: navigate });
			}}>
				<Text style={ styles.createBoardText }> + </Text>
			</TouchableHighlight>
			<BoardView navigation={ navigate } data={ Data } />
		</View>
	);

}

export default Boards;
