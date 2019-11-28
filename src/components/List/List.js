import React from 'react';
import { View, Text, FlatList } from 'react-native';
import Data from '../../resources/data.json'

class List extends React.Component{
  render() {
    const { navigation } = this.props;
    var list = navigation.getParam('list');

    return(
      <View style={{ flex: 1 }}>
        <FlatList
          numColumns={1}
          data={Data.tasks}
          renderItem={ ({ item: { id, name, description, isFinished, listId }}) => {
            if(listId == list) {
              return(
                  <Text> { name } </Text>
              );
            }
          }} keyExtractor={(task) => task.name}
        />
      </View>
    );
   }
 }

 export default List;
