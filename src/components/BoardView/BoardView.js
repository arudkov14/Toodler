import React from 'react';
import { View, Text, FlatList, TouchableHighlight } from 'react-native';
import SwipeableViews from 'react-swipeable-views-native';
import BoardThumbnail from '../BoardThumbnail/BoardThumbnail';
import styles from './styles';

const BoardView = ({ navigation: { navigate }, boardId, boardIndex, data }) => {
	var board = data.boards[boardIndex];

	if(board === undefined) {
		return (
			<View>
			</View>
		);
	}

	return (
		<View style={{ flex: 1 }}>
			<TouchableHighlight onPress={()=> {
			  navigate('Board', { navigation: navigate, id: boardId, data: data})
			}}>
				<View>
					<Text style={ styles.boardTitle }> { board.name } </Text>
					<BoardThumbnail image={ board.thumbnailPhoto } />
				</View>
		  </TouchableHighlight>
		</View>
	);
}

export default BoardView;
