import React from 'react';
import { View, Text, TextInput, Button, Vibration, Alert, TouchableHighlight } from 'react-native';
import ColorPicker from '../ColorPicker/ColorPicker';
import Data from '../../resources/data.json';
import styles from './styles.js';

class CreateList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
      id: '',
			name: '',
      color: 'white',
      boardId: '',
		};
	}

	assignListId() {
		var id = Math.max.apply(Math, Data.lists.map(function(b) {
			return b.id;
		}))

		this.setState({
			id: id + 1,
		});
	}

	updateTitle(title) {
		this.setState({
			name: title
		});
	}

  updateColor(color) {
    this.setState({
      color: color
    });
  }

	submitList() {
		const { name } = this.state;
    const { color } = this.state;
    const { boardId } = this.props;
    const { updateBoard } = this.props;

		if(name == '') {
			Alert.alert('One or more required fields are empty');
			Vibration.vibrate(50);
			return;
		}

		Data.lists.push({
			id: this.assignListId(),
			name: name,
			color: color,
			boardId:  boardId,
		});

		Alert.alert(name + ' has been created!');
		Vibration.vibrate(50);
    this.forceUpdate();
    updateBoard();
	}

	render() {
		return (
			<View style={ styles.container }>
				<View style={ styles.inputContainer }>
					<TextInput style={ styles.inputBox }
					 	value={ this.state.name }
						onChangeText={ title => this.updateTitle(title) }
						placeholder='List Title'
						placeholderTextColor={ 'white' }
						fontColor={ 'white' }
					/>
				</View>

        <ColorPicker updateColor={ (color) => this.updateColor(color) }/>

				<TouchableHighlight style={ styles.submitButton }
				 onPress={ () => this.submitList() } >
					<Text style={ {color: '#fff'} }> Done </Text>
				</TouchableHighlight>
			</View>
		);
	}
}

export default CreateList;
