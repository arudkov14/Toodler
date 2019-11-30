import React from 'react';
import { View, Text, FlatList, Button, TouchableOpacity, Image } from 'react-native';
import styles from './styles.js';
import ListView from '../ListView/ListView.js';
import Data from '../../resources/data.json';

class Board extends React.Component {
	constructor(props) {
		super(props);
	}

	createList() {
		console.log('create')
	}

	deleteBoard(id, navigation, update) {
		delete Data.boards[this.findBoardIndex(id)];
		Data.boards = Data.boards.filter(function(i) {
      return i != undefined;
    });

		update();
		navigation.pop();
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
		var update = navigation.getParam('update');
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
				<ListView navigation={ navigation } board={ id } lists={ Data.lists } />
				<TouchableOpacity style={ styles.createList }
				 onPress={ () => this.createList() }>
					<Text style={ styles.createListText }> + </Text>
				</TouchableOpacity>
				<Button color='#515b6b' title='Delete Board' onPress={ () => this.deleteBoard(id, navigation, update) } />
			</View>
		);
	}
}

export default Board;
