import { StyleSheet } from 'react-native';

export default StyleSheet.create({
	container: {
		backgroundColor: '#fff'
	},

	header: {
		fontSize: 20,
		padding: 20,
		alignSelf: 'center',
		borderBottomWidth: 2,
	},

	headerContainer: {
		flexDirection: 'row',
	},

	list: {
		padding: 10,
	},

	listText: {
		color: 'black'
	},

	removeIcon: {
		width: 20,
		height: 20,
		marginLeft: 'auto',
		marginBottom: 'auto',
		marginRight: 20,
	},

	deleteButton: {
		display: 'flex',
		marginLeft: 'auto',
		marginTop: 10,
		width: 20,
		height: 20,
	},
});
