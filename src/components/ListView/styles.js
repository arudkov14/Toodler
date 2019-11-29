import { StyleSheet } from 'react-native';

export default StyleSheet.create({
	list: {
		display: 'flex',
		flexDirection: 'row',
		flex: 1,
		fontSize: 50,
		padding: 20,
	},

	text: {
		fontSize: 500,
		color: '#fff',
	},

	deleteButton: {
		display: 'flex',
		marginLeft: 'auto',

		width: 20,
		height: 20,
	},

	removeIcon: {
		marginTop: 5,
		width: 20,
		height: 20,
	}
});
