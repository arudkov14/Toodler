import { StyleSheet } from 'react-native';

export default StyleSheet.create({
	container: {
    flex: 1,
    backgroundColor: '#252c38',
  },

	inputContainer: {

		alignItems: 'center'
	},

	imageContainer: {
		display: 'flex',
		flexDirection: 'row',
	},

	inputBox: {
		borderWidth: 2,
		backgroundColor: '#a4aebf',
		borderRadius: 6,
		width: 300,
		padding: 20,
		justifyContent: 'center',
		fontSize: 20,
		marginTop: 20,
	},

	inputBoxImage: {
		borderWidth: 2,
		backgroundColor: '#a4aebf',
		borderRadius: 6,
		width: 250,
		padding: 20,
		justifyContent: 'center',
		fontSize: 20,
		marginTop: 20,
	},

	photoBox: {
		borderWidth: 2,
		width: 'auto',
		height: 'auto',
		marginTop: 20,
		marginLeft: -25,
		backgroundColor: '#515b6b',
		justifyContent: 'center',
		borderRadius: 6,
	},

	submitButton: {
		borderWidth: 2,
		backgroundColor: '#515b6b',
		padding: 15,
		marginTop: 10,
		marginBottom: 'auto',
		borderRadius: 6,
		width: 100,
		marginLeft: 30,
		alignItems: 'center',
	},

	headerContainer: {
		alignItems: 'center',
		justifyContent: 'center',
		borderWidth: 2,
		width: 'auto',
		height: 70,
		backgroundColor: '#515b6b',
	},

	text: {
		fontSize: 30,
		color: '#a4aebf',
	},

	cameraIcon: {
			width: 70,
			height: 40,
	}
});
