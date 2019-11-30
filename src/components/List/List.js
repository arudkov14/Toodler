import React from 'react';
import { View, Text, FlatList, Button, TouchableHighlight, TouchableOpacity, Image } from 'react-native';
import { CheckBox } from 'react-native';
import Data from '../../resources/data.json';
import styles from './styles.js';

class List extends React.Component{
  toggleTaskFinished(id) {
    Data.tasks[this.getTaskIndex(id)].isFinished = true;
    this.forceUpdate();
  }

  toggleTaskUnfinished(id) {
    Data.tasks[this.getTaskIndex(id)].isFinished = false;
    this.forceUpdate();
  }

  createTask() {
    console.log('create task')
  }

  deleteTask(id) {
    delete Data.tasks[this.getTaskIndex(id)];
    Data.tasks = Data.tasks.filter(function(i) {
      return i != undefined;
    });
    this.forceUpdate();
  }

  getTaskIndex(id) {
    for(var i = 0; i < Data.tasks.length; i++) {
      if(Data.tasks[i].id == id) {
        return i;
      }
    }
  }

  render() {
    const { navigation } = this.props;
    var list = navigation.getParam('list');

    return(
      <View style={ styles.container }>
        <View style={ styles.subContainer }>
        <FlatList
          numColumns={1}
          data={ Data.tasks }
          renderItem={ ({ item: { id, name, description, isFinished, listId }}) => {
            if(id === null) { return; }
            if(listId == list) {
              if(isFinished) {
                return(
                  <View style={ styles.taskFinished }>
                    <View style={ styles.taskContainer }>
                      <CheckBox style={ styles.checkBox } value={ isFinished } onValueChange={ () => this.toggleTaskUnfinished(id) } />
                      <Text style={{textDecorationLine: 'line-through'}}>
                        <Text style={ styles.taskTitle }> { name } </Text>
                      </Text>
                      <TouchableHighlight style={ styles.deleteButton } onPress={ () => this.deleteTask(id) }>
                        <Image
                          style={ styles.removeIcon }
                          resizeMode='cover'
                          source={ require('../../../assets/close.png') }
                         />
                      </TouchableHighlight>
                    </View>
                    <Text style={ styles.taskDescription }> { description } </Text>
                  </View>
                );
              } else {
                return(
                  <View style={ styles.taskUnfinished }>
                    <View style={ styles.taskContainer }>
                      <CheckBox style={ styles.checkBox } value={ isFinished } onValueChange={ () => this.toggleTaskFinished(id) } />
                      <Text style={ styles.taskTitle }> { name } </Text>
                      <TouchableHighlight style={ styles.deleteButton } onPress={ () => this.deleteTask(id) }>
                        <Image
                          style={ styles.removeIcon }
                          resizeMode='cover'
                          source={ require('../../../assets/close.png') }
                         />
                      </TouchableHighlight>
                    </View>
                    <Text style={ styles.taskDescription }> { description } </Text>
                  </View>
                );
              }
            }
          }} keyExtractor={(task) => task.name}
        />
        <View style= { styles.createTaskContainer }>
          <TouchableOpacity style={ styles.createTask }
           onPress={ () => this.createTask() }>
            <Text style={ styles.createTaskText }> + </Text>
          </TouchableOpacity>
        </View>
        </View>
      </View>
    );
   }
 }

 export default List;
