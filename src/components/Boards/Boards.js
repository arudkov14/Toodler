import React from 'react';
import SwipeableViews from 'react-swipeable-views-native';
import { StyleSheet, Text, View, Image, Button, TouchableHighlight } from 'react-native';
import BoardView from '../BoardView/BoardView';
import Data from '../../resources/data.json';
import styles from './styles.js';

class Boards extends React.Component { //= ( { navigation: navigate } ) => {
	updateBoards() {
		this.forceUpdate();
	}

	render() {
		const { navigation } = this.props;

		return(
			<View style={styles.container}>
				<TouchableHighlight style={ styles.createBoard } onPress={ () => {
					navigation.navigate('CreateBoard', { navigation: navigation, update: () => this.updateBoards() });
				}}>
					<Text style={ styles.createBoardText }> + </Text>
				</TouchableHighlight>
				<BoardView navigation={ navigation } data={ Data } update={ () => this.updateBoards() } />
			</View>
		);
	}
}

export default Boards;
