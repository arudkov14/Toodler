import React from 'react';
import { View, Text, TextInput, Button, Vibration, Alert } from 'react-native';
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
		const { navigation } = this.props;

		if(boardTitle == '' || boardThumbnail == '') {
			Alert.alert('One or more required fields are empty');
			Vibration.vibrate(50);
			return
		}

		Data.boards.push({
			id: this.assignBoardId(),
			name: boardTitle,
			description: description,
			thumbnailPhoto: boardThumbnail,
		});

		Alert.alert(boardTitle + ' has been created!');
		Vibration.vibrate(50);
		this.props.navigation.navigate('Main');
	}

	render() {
		return (
			<View style={ styles.container }>
				<Text style={ styles.text }> Board Title </Text>
				<TextInput style={ styles.inputBox }
					autoCapitalize='sentences'
				 	value={ this.state.boardTitle }
					onChangeText={ title => this.updateTitle(title) }
					required
				/>

				<Text style={ styles.text }> Description (optional) </Text>
				<TextInput style={ styles.inputBox }
				 	value={ this.state.description }
					onChangeText={ text => this.updateDescription(text) }
				/>

				<Text style={ styles.text }> Image Link </Text>
				<TextInput style={ styles.inputBox }
				 	value={ this.state.boardThumbnail }
					onChangeText={ link => this.updateThumbnail(link) }
					required
				/>
				<Button color='#515b6b' title='Take Photo' onPress={ () => this.takePhoto() } />
				<Button color='#515b6b' title='Done' onPress={ () => this.submitBoard() }/>
			</View>
		);
	}
}

export default CreateBoard;
