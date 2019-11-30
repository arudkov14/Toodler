import { StyleSheet } from 'react-native';

export default StyleSheet.create({
	container: {
    backgroundColor: '#252c38',
		borderTopWidth: 2,
  },

	inputContainer: {
		alignItems: 'center'
	},

	inputBox: {
		borderWidth: 2,
		backgroundColor: '#a4aebf',
		borderRadius: 6,
		width: 300,
		padding: 10,
		justifyContent: 'center',
		fontSize: 20,
		marginTop: 20,
	},

	submitButton: {
		borderWidth: 2,
		backgroundColor: '#515b6b',
		padding: 10,
		marginTop: 10,
		marginBottom: 5,
		borderRadius: 6,
		width: 200,
		alignItems: 'center',
		alignSelf: 'center',
	},

	headerContainer: {
		alignItems: 'center',
		justifyContent: 'center',
		alignSelf: 'center',
		borderBottomWidth: 2,
		borderColor: '#515b6b',
		borderRadius: 6,
		//borderWidth: 2
		width: 294,
		height: 70,
		//backgroundColor: '#515b6b',
	},

	text: {
		fontSize: 30,
		//color: '#a4aebf',
		color: '#fff',
	},

	removeIcon: {
		width: 20,
		height: 20,
	},

	deleteButton: {
		marginTop: 10,
		display: 'flex',
		marginLeft: 'auto',
		marginRight: 20,
		width: 20,
		height: 20,
	},
});
