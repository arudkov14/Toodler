import React from 'react';
import { View, Text, FlatList, TouchableHighlight } from 'react-native';
import SwipeableViews from 'react-swipeable-views-native';
import BoardThumbnail from '../BoardThumbnail/BoardThumbnail';
import styles from './styles';

const BoardList = ({ navigation: { navigate }, boardId, data }) => {
	var board = data.boards[boardId - 1];

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

export default BoardList;
