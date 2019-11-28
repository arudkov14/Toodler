import React from 'react';
import { View, Text, FlatList, Button } from 'react-native';
import Data from '../../resources/data.json'

class List extends React.Component{
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
      <View style={{ flex: 1 }}>
        <FlatList
          numColumns={1}
          data={Data.tasks}
          renderItem={ ({ item: { id, name, description, isFinished, listId }}) => {
            if(id === null) { return; }
            if(listId == list) {
              return(
                <View>
                  <Text> { name } </Text>
                  <Button title='X' onPress={ () => this.deleteTask(id) } />
                </View>
              );
            }
          }} keyExtractor={(task) => task.name}
        />
      </View>
    );
   }
 }

 export default List;
