import React from 'react';
import { Text, View, FlatList, TouchableHighlight, Button } from 'react-native';
import styles from './styles.js';
import Data from '../../resources/data.json';

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
    <View style={{ flex: 1 }}>
      <FlatList
        numColumns={1}
        data={ Data.lists }
        renderItem={ ({ item: { id, name, color, boardId}}) => {
          if(boardId == board) {
            return (
              <View>
                <TouchableHighlight onPress={() => {navigate('List', {list: id})}}>
                  <Text style={{color: color}}> { name } </Text>
                </TouchableHighlight>
                <Button title='X' onPress={ () => deleteList(id) } />
              </View>
            );
          }
        }} keyExtractor={(list) => list.name}
     />
    </View>
  );
}

export default ListView
