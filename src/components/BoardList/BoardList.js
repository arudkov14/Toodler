import React from 'react';
import { View, Text, FlatList } from 'react-native';
import SwipeableViews from 'react-swipeable-views-native';
import BoardThumbnail from '../BoardThumbnail/BoardThumbnail';
import styles from './styles';

const BoardList = ({ boardId, boards }) => {
	return(
		<View style={{ flex: 1 }}>
			<FlatList
				numColumns={1}
				data={ boards }
				renderItem={({ item: { id, name, thumbnailPhoto }}) => {
					if(id == boardId) {
						return (
							<View>
								<Text style={ styles.boardTitle }> { name } </Text>
								<BoardThumbnail image={ thumbnailPhoto } />
							</View>
						);
				 }
				}}
				keyExtractor={(image) => image.name} />
		</View>
	)
}


export default BoardList;
