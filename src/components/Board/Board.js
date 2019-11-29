import React from 'react';
import { View, Text, FlatList, Button, TouchableOpacity } from 'react-native';
import styles from './styles.js';
import ListView from '../ListView/ListView.js';
import Data from '../../resources/data.json';

class Board extends React.Component {
	createList() {
		console.log('create')
	}

	render() {
		const { navigation } = this.props;
		var board = navigation.getParam('id');

		return (
			<View style={ styles.container }>
				<ListView navigation={ navigation } board={ board } />
				<TouchableOpacity style={ styles.createList }
				 onPress={ () => this.createList() }>
					<Text style={ styles.createListText }> + </Text>
				</TouchableOpacity>
			</View>
		);
	}
}

export default Board;
