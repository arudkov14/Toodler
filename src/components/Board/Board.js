import React from 'react';
import { View, Text, FlatList } from 'react-native';
import styles from './styles.js';

class Board extends React.Component {
	render() {
		const { navigation } = this.props;
		const { id } = this.props;
		const { data } = this.props;

		console.log(data)

		return (
			<View style={ styles.container }>
				<Text> Here's a fucking board { id } </Text>
			</View>
		);
	}
}

export default Board;
