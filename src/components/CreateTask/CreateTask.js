import React from 'react';
import { View, Text, TextInput, Button, Vibration, Alert, TouchableHighlight } from 'react-native';
import ColorPicker from '../ColorPicker/ColorPicker';
import Data from '../../resources/data.json';
import styles from './styles.js';

class CreateTask extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
      id: '',
			name: '',
			description: '',
      listId: '',
		};
	}

	assignTaskId() {
		var id = Math.max.apply(Math, Data.tasks.map(function(b) {
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

	submitTask() {
		const { name } = this.state;
    const { description } = this.state;
    const { boardId } = this.props;
    const { updateBoard } = this.props;

		if(name == '') {
			Alert.alert('One or more required fields are empty');
			Vibration.vibrate(50);
			return;
		}

		Data.tasks.push({
			id: this.assignTaskId(),
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
				<View style={ { backgroundColor: this.state.color } }>
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
			</View>
		);
	}
}

export default CreateTask;
