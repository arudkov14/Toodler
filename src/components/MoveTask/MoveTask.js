import React from 'react';
import { Text, Picker, View, FlatList, TouchableHighlight, TouchableOpacity, Alert, Image} from 'react-native';
import Data from '../../resources/data.json';
import styles from './styles.js';

class MoveTask extends React.Component {
  constructor(props) {
    super(props);
  }

	moveTask(taskId, listId) {
		Data.tasks[this.findTaskIndex(taskId)].listId = listId;
		Alert.alert('Task has been moved!');
    this.close();
	}

  close() {
    const { updateList } =this.props;
    updateList();
  }

	findTaskIndex(id) {
		for(var i = 0; i < Data.tasks.length; i++) {
			if(Data.tasks[i].id == id) {
				return i;
			}
		}
	}

  render() {
    const { board } = this.props;
		const { taskId } = this.props;
    return (
      <View style={ styles.container }>
        <View style={ styles.headerContainer }>
          <Text style={ styles.header }> Move task to </Text>
          <TouchableOpacity style={ styles.removeIcon } onPress={ () => this.close() }>
            <Image
             style={ styles.removeIcon }
             resizeMode='cover'
             source={ require('../../../assets/close.png') }
            />
          </TouchableOpacity>
        </View>
				<FlatList
					numColumns={1}
					data={ Data.lists }
					initialNumToRender={50}
					renderItem={ ({ item: { id, name, color, boardId }}) => {
						if(boardId == board) {
							return(
								<TouchableOpacity style={ { backgroundColor: color, padding: 10, borderBottomWidth: 2 } } onPress={ () => this.moveTask(taskId, id) }>
									<Text style={ styles.listText }> { name } </Text>
								</TouchableOpacity>
							);
						}
					}} keyExtractor={(list) => list.name}
			 />
      </View>
    );
  }
}

export default MoveTask;
