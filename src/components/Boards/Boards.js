import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Boards = () => {
	return(
		<View>
			<Text style={styles.text}> Here are some boards </Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},

	text: {
		color: '#b4c0d4',
	}
});

export default Boards;
