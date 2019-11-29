import React from 'react';
import { View, Text, TextInput, Button, Vibration, Alert, TouchableHighlight, Image } from 'react-native';
import { takePhoto } from '../../services/imageService';
import Data from '../../resources/data.json';
import styles from './styles.js';

class CreateBoard extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			boardId: '',
			boardTitle: '',
			boardDescription: '',
			boardThumbnail: '',
		};
	}

	assignBoardId() {
		var id = Math.max.apply(Math, Data.boards.map(function(o) {
			return o.id;
		}))

		this.setState({
			boardId: id + 1,
		});
	}

	updateTitle(title) {
		this.setState({
			boardTitle: title
		});
	}

	updateDescription(text) {
		this.setState({
			boardDescription: text,
		});
	}

	updateThumbnail(link) {
		this.setState({
			boardThumbnail: link,
		});
	}

	async takePhoto() {
		const photoURI = await takePhoto();
		this.updateThumbnail(photoURI);
	}

	submitBoard() {
		const { boardTitle } = this.state;
		const { boardThumbnail } = this.state;
		const { description } = this.state;

		if(boardTitle == '' || boardThumbnail == '') {
			Alert.alert('One or more required fields are empty');
			Vibration.vibrate(50);
			return;
		}

		Data.boards.push({
			id: this.assignBoardId(),
			name: boardTitle,
			description: description,
			thumbnailPhoto: boardThumbnail,
		});

		Alert.alert(boardTitle + ' has been created!');
		Vibration.vibrate(50);

		const { navigation } = this.props;
		/*
		var update = navigation.getParam('update');
		if(update !== undefined) {
			update;
			console.log(update);
		} else {
			console.log(update)
		}
		*/
		navigation.pop();
	}

	render() {
		return (
			<View style={ styles.container }>
				<View style={ styles.headerContainer }>
					<Text style={ styles.text }> Create Board </Text>
				</View>

				<View style={ styles.inputContainer }>
					<TextInput style={ styles.inputBox }
					 	value={ this.state.boardTitle }
						onChangeText={ title => this.updateTitle(title) }
						placeholder='Board Title'
						placeholderTextColor={ 'white' }
						fontColor={ 'white' }
					/>

					<TextInput style={ styles.inputBox }
					 	value={ this.state.description }
						onChangeText={ text => this.updateDescription(text) }
						placeholder='Description (optional)'
						placeholderTextColor={ 'white' }
					/>

					<View style={ styles.imageContainer }>
						<TextInput style={ styles.inputBoxImage }
						 	value={ this.state.boardThumbnail }
							onChangeText={ link => this.updateThumbnail(link) }
							placeholder='Image'
							placeholderTextColor={ 'white' }
						/>

						<TouchableHighlight style={ styles.photoBox }
						 onPress={ () => this.takePhoto() } >
						 <View>
	 						 <Image
	 							 style={ styles.cameraIcon }
	 							 resizeMode='cover'
	 							 source={ require('../../../assets/icon-camera-512.png') }
	 							/>
 							</View>
						</TouchableHighlight>
					</View>
				</View>

				<TouchableHighlight style={ styles.submitButton }
				 onPress={ () => this.submitBoard() } >
					<Text style={ {color: '#fff'} }> Done </Text>
				</TouchableHighlight>
			</View>
		);
	}
}

export default CreateBoard;
