import { StyleSheet } from 'react-native';

export default StyleSheet.create({
	container: {
    flex: 1,
    backgroundColor: '#252c38',
    justifyContent: 'center',
  },

	boardContainer: {
		flex: 1,
		marginTop: 100,
		alignSelf: 'center',
		borderRadius: 6,
		borderWidth: 0.5,
		borderColor: 'white',
		width: 250,
		height: 100,
	},

	createBoard: {
		backgroundColor: '#3a404a',
		padding: 15,
		alignItems: 'center',
	},

	createBoardText: {
		color: 'white',
		fontSize: 20,
	},

	text: {
		color: '#b4c0d4',
	}
});
