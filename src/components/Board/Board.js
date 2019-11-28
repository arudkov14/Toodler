import React from 'react';
import { View, Text, FlatList, Button } from 'react-native';
import styles from './styles.js';
import ListView from '../ListView/ListView.js';
import Data from '../../resources/data.json';

class Board extends React.Component {
	render() {
		const { navigation } = this.props;

		var data = navigation.getParam('data');
		var board = navigation.getParam('id');

		console.log(board)

		return (
			<View style={ styles.container }>
				<ListView board={ board } />
			</View>
		);
	}
}

export default Board;
