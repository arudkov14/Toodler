import React from 'react';
import { View, Text, TextInput, Button, Vibration, Alert, TouchableHighlight } from 'react-native';
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
		}));
		return id + 1;
	}

	updateTitle(title) {
		this.setState({
			name: title
		});
	}

	updateDescription(desc) {
		this.setState({
			description: desc,
		});
	}

	submitTask() {
		const { name } = this.state;
    const { description } = this.state;
    const { listId } = this.props;
    const { updateList } = this.props;

		console.log(listId);

		if(name == '') {
			Alert.alert('One or more required fields are empty');
			Vibration.vibrate(50);
			return;
		}

		Data.tasks.push({
			id: this.assignTaskId(),
			name: name,
			description: description,
			isFinished: false,
			listId:  listId,
		});

		Alert.alert(name + ' has been created!');
		Vibration.vibrate(50);
    this.forceUpdate();
    updateList();
	}

	render() {
		return (
			<View style={ styles.container }>
				<View style={ { backgroundColor: this.state.color } }>
					<View style={ styles.inputContainer }>
						<TextInput style={ styles.inputBox }
						 	value={ this.state.name }
							onChangeText={ title => this.updateTitle(title) }
							placeholder='Task Title'
							placeholderTextColor={ 'white' }
							fontColor={ 'white' }
						/>

						<TextInput style={ styles.inputBox }
						 	value={ this.state.description }
							onChangeText={ title => this.updateDescription(title) }
							placeholder='Description'
							placeholderTextColor={ 'white' }
							fontColor={ 'white' }
						/>
					</View>

					<TouchableHighlight style={ styles.submitButton }
					 onPress={ () => this.submitTask() } >
						<Text style={ {color: '#fff'} }> Done </Text>
					</TouchableHighlight>
				</View>
			</View>
		);
	}
}

export default CreateTask;
