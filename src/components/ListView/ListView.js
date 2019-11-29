import React from 'react';
import { Text, View, FlatList, TouchableHighlight, TouchableOpacity, Button } from 'react-native';
import Data from '../../resources/data.json';
import styles from './styles.js';

const ListView = ( {navigation: { navigate }, board} ) => {
  function deleteList(id) {
    delete Data.lists[getListIndex(id)];
    Data.lists = Data.lists.filter(function(i) {
      return i != undefined;
    });
  }

  function getListIndex(id) {
    for(var i = 0; i < Data.lists.length; i++) {
      if(Data.lists[i].id == id) {
        return i;
      }
    }
  }

  return (
    <View>
      <FlatList
        numColumns={1}
        data={ Data.lists }
        renderItem={ ({ item: { id, name, color, boardId}}) => {
          if(boardId == board) {
            return (
              <TouchableHighlight style={{ backgroundColor: color } }
               onPress={() => { navigate('List', { list: id }) }} >
                <View style={ styles.list } >
                  <Text style={{
                    backgroundColor: color,
                    fontSize: 20,
                  }}>
                    { name }
                  </Text>
                  <TouchableOpacity style={ styles.deleteButton }
                   onPress={ () => deleteList(id) }>
                    <Text> X </Text>
                  </TouchableOpacity>
                </View>
              </TouchableHighlight>
            );
          }
        }} keyExtractor={(list) => list.name}
     />
    </View>
  );
}

export default ListView
