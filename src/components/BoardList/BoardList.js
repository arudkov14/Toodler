import React from 'react';
import { View, Text, FlatList, TouchableHighlight } from 'react-native';
import SwipeableViews from 'react-swipeable-views-native';
import BoardThumbnail from '../BoardThumbnail/BoardThumbnail';
import styles from './styles';

const BoardList = ({ navigation: { navigate }, boardId, data }) => {
	return(
		<View style={{ flex: 1 }}>
			<FlatList
				numColumns={1} data={ data.boards }
				renderItem={({ item: { id, name, thumbnailPhoto }}) => {
					if(id == boardId) {
						return (
							<TouchableHighlight onPress={()=> {
									navigate('Board', { navigation: navigate, id: id, data: data, a: 30 })
							 	}
							}>
								<View>
									<Text style={ styles.boardTitle }> { name } </Text>
									<BoardThumbnail image={ thumbnailPhoto } />
								</View>
							</TouchableHighlight>
						);
				 }
				}} keyExtractor={(image) => image.name} />
		</View>
	)
}


export default BoardList;
