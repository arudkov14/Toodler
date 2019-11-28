import React from 'react';
import { Text, View, FlatList, TouchableHighlight } from 'react-native';
import styles from './styles.js';
import Data from '../../resources/data.json';

const ListView = ( {navigation: { navigate }, board} ) => {
  return (
    <View style={{ flex: 1 }}>
      <FlatList
        numColumns={1}
        data={Data.lists }
        renderItem={ ({ item: { id, name, color, boardId}}) => {
          console.log(color)
          if(boardId == board) {
            return (
              <TouchableHighlight onPress={() => {navigate('List', {list: id})}}>
                <Text style={{color: color}}> { name } </Text>
              </TouchableHighlight>
            );
          }
        }} keyExtractor={(list) => list.name}
     />
    </View>
  );
}

export default ListView
