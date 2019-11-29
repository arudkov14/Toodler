import React from 'react';
import { View, Text, FlatList, TouchableHighlight, useState } from 'react-native';
import SwipeableViews from 'react-swipeable-views-native';
import BoardThumbnail from '../BoardThumbnail/BoardThumbnail';
import styles from './styles';

const BoardView = ({ navigation: { navigate }, boardId, boardIndex, data }) => {
	var boards = data.boards;

	if(boards === undefined) {
		return (
			<View>
			</View>
		);
	}

	return (
		<FlatList
			numColumns={2}
			data={ boards }
			renderItem={ ({ item: { id, name, thumbnailPhoto }}) => {
				return (
					<View>
						<TouchableHighlight style={ styles.boardContainer } onPress={()=> {
							navigate('Board', { navigation: navigate, id: id })
						}}>
							<View>
								<View style={ styles.boardTitleContainer }>
									<Text style={ styles.boardTitle }> { name } </Text>
								</View>
								<View style={ styles.thumbnail }>
									<BoardThumbnail style={ styles.thumbnail } image={ thumbnailPhoto } />
								</View>
							</View>
						</TouchableHighlight>
					</View>
				);
			}}keyExtractor={ board => board.name}
		/>
	);
}

export default BoardView;
