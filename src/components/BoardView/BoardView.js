import React from 'react';
import { View, Text, FlatList, TouchableHighlight, useState } from 'react-native';
import SwipeableViews from 'react-swipeable-views-native';
import BoardThumbnail from '../BoardThumbnail/BoardThumbnail';
import Data from '../../resources/data.json';
import styles from './styles';

class BoardView extends React.Component { //= ({ navigation: { navigate }, boardId, boardIndex, data }) => {
	updateView() {
		const { update } = this.props;
		update();
	}
	render() {
		const { navigation } = this.props;
		const { boardId } = this.props;
		const { boardIndex } = this.props;
		var boards = Data.boards;

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
				initialNumToRender={50}
				renderItem={ ({ item: { id, name, thumbnailPhoto }}) => {
					return (
						<View>
							<TouchableHighlight style={ styles.boardContainer } onPress={()=> {
								navigation.navigate('Board', { navigation: navigation, id: id, update: () => this.updateView() })
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
}

export default BoardView;
