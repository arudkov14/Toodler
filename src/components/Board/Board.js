import React from 'react';
import { View, Text, FlatList, Button, TouchableOpacity, Image } from 'react-native';
import styles from './styles.js';
import ListView from '../ListView/ListView.js';
import Data from '../../resources/data.json';

class Board extends React.Component {
	createList() {
		console.log('create')
	}

	deleteBoard(id, navigation) {
		const { update } = this.props;
		delete Data.boards[this.findBoardIndex(id)];
		Data.boards = Data.boards.filter(function(i) {
      return i != undefined;
    });

		navigation.navigate('Boards');
		update;
	}

	findBoardIndex(id) {
		for(var i = 0; i < Data.boards.length; i++) {
			if(Data.boards[i].id == id) {
				return i;
			}
		}
	}

	render() {
		const { navigation } = this.props;
		var id = navigation.getParam('id');
		var boardData = Data.boards[this.findBoardIndex(id)];

		/*<View style={ styles.boardHeader }>
			<Text style={ styles.boardHeaderText }> { boardData.name } </Text>
			<Image
				style={ styles.boardHeaderDelete }
				resizeMode='cover'
				source={ require('../../../assets/trash-bin.png') }
			 />
		</View>*/

		return (
			<View style={ styles.container }>
				<ListView navigation={ navigation } board={ id } />
				<TouchableOpacity style={ styles.createList }
				 onPress={ () => this.createList() }>
					<Text style={ styles.createListText }> + </Text>
				</TouchableOpacity>
				<Button title='Delete Board' onPress={ () => this.deleteBoard(id, navigation) } />
			</View>
		);
	}
}

export default Board;
