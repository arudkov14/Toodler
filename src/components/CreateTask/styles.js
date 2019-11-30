import { StyleSheet } from 'react-native';

export default StyleSheet.create({
	container: {
		flex: 1,
    backgroundColor: '#252c38',
    justifyContent: 'center',
  },

	subContainer: {
		marginBottom: 'auto',
	},

	createTaskContainer: {
		marginBottom: 'auto',
		backgroundColor: '#252c38',
	},

	createTask: {
		marginBottom: 'auto',
		backgroundColor: '#515b6b',
		padding: 15,
	},

	createTaskText: {
		color: '#fff',
		alignSelf: 'center',
		fontSize: 20,
	},

	taskFinished: {
		padding: 10,
		backgroundColor: '#39ed6c',
		borderBottomWidth: 2,
	},

	taskUnfinished: {
		padding: 10,
		backgroundColor: '#ed1c54',
		borderBottomWidth: 2,
	},

	taskTitle: {
		fontSize: 18,
	},

	taskContainer: {
		display: 'flex',
		flexDirection: 'row',
		padding: 10,

	},

	taskDescription: {
		marginTop: 'auto',

	},

	checkBox: {

	},

	deleteButton: {
		marginLeft: 'auto',
	},

	removeIcon: {
		marginTop: 5,
		width: 20,
		height: 20,
	},
});
